import { describe, expect, test } from "bun:test";
import { TaskService, type Task, type TaskRepository, type IdGenerator, type Clock } from "../../src/day-07/task-pipeline";

describe("day-07 task-pipeline", () => {
  function makeService() {
    const tasks: Task[] = [];
    const repo: TaskRepository = {
      getAll: () => tasks,
      getById: (id: string) => tasks.find((t) => t.id === id),
      save: (task: Task) => {
        const idx = tasks.findIndex((t) => t.id === task.id);
        if (idx >= 0) tasks[idx] = task;
        else tasks.push(task);
      },
    };
    let counter = 0;
    const idGen: IdGenerator = { next: () => `t${++counter}` };
    const clock: Clock = { now: () => 1000 + counter };
    return { service: new TaskService(repo, idGen, clock), tasks };
  }

  test("createTask creates pending task", () => {
    const { service } = makeService();
    const task = service.createTask("Write tests", "high");
    expect(task.id).toBe("t1");
    expect(task.status).toBe("pending");
    expect(task.priority).toBe("high");
    expect(task.createdAt).toBe(1001);
  });

  test("createTask rejects empty title", () => {
    const { service } = makeService();
    expect(() => service.createTask("   ")).toThrow(/title/i);
  });

  test("completeTask marks completed", () => {
    const { service } = makeService();
    const task = service.createTask("Do it");
    const completed = service.completeTask(task.id);
    expect(completed.status).toBe("completed");
    expect(completed.completedAt).toBeDefined();
  });

  test("completeTask throws for unknown id", () => {
    const { service } = makeService();
    expect(() => service.completeTask("nope")).toThrow(/not found/i);
  });

  test("listByStatus filters", () => {
    const { service } = makeService();
    service.createTask("A");
    const t2 = service.createTask("B");
    service.completeTask(t2.id);
    expect(service.listByStatus("pending").length).toBe(1);
    expect(service.listByStatus("completed").length).toBe(1);
  });

  test("processPending processes and counts", async () => {
    const { service } = makeService();
    service.createTask("A");
    service.createTask("B");
    const seen: string[] = [];
    const result = await service.processPending(async (task) => {
      seen.push(task.id);
      if (task.title === "B") throw new Error("fail");
    });
    expect(result).toEqual({ processed: 1, failed: 1 });
    expect(seen).toEqual(["t1", "t2"]);
    const statuses = service.listByStatus("completed").length;
    expect(statuses).toBe(1);
    expect(service.listByStatus("failed").length).toBe(1);
  });

  test("processPending with no pending", async () => {
    const { service } = makeService();
    const result = await service.processPending(async () => {});
    expect(result).toEqual({ processed: 0, failed: 0 });
  });
});