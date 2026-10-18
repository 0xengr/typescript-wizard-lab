/**
 * Day 7 — Integration challenge: Task processing system
 *
 * Combines: domain types, unions, narrowing, generics, modules, classes,
 * composition, async/await, error handling, testable dependencies.
 *
 * Scenario: A small task service manages tasks with statuses and priorities.
 *
 * Required:
 * - `TaskStatus` union: "pending" | "completed" | "failed".
 * - `TaskPriority` union: "low" | "medium" | "high".
 * - `Task` type with id, title, priority, status, createdAt, completedAt?.
 * - `TaskRepository`, `IdGenerator`, `Clock` interfaces for DI.
 * - `TaskService` class composing them.
 * - `createTask(title, priority?)` validates title and creates a pending task.
 * - `completeTask(id)` marks a task completed (throws if missing).
 * - `listByStatus(status)` filters tasks.
 * - `processPending(handler)` runs handler for each pending task, marking
 *   completed on success or failed on error, returning counts.
 *
 * Acceptance criteria:
 * - Empty/whitespace titles are rejected.
 * - `processPending` continues after a failing task.
 * - Dependencies are injected, not constructed inside.
 *
 * Edge cases:
 * - Unknown task id.
 * - No pending tasks.
 * - Handler throws for some tasks.
 *
 * Corresponding test: tests/day-07/task-pipeline.test.ts
 *
 * Hints:
 * 1. Start with types and interfaces.
 * 2. Inject repository, id generator, clock.
 * 3. Use try/catch around handler calls.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/classes.html
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export type TaskStatus = "pending" | "completed" | "failed";

export type TaskPriority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: number;
  completedAt?: number;
};

export interface TaskRepository {
  getAll(): Task[];
  getById(id: string): Task | undefined;
  save(task: Task): void;
}

export interface IdGenerator {
  next(): string;
}

export interface Clock {
  now(): number;
}

export class TaskService {
  constructor(
    private readonly repository: TaskRepository,
    private readonly idGenerator: IdGenerator,
    private readonly clock: Clock,
  ) {}

  createTask(title: string, priority: TaskPriority = "medium"): Task {
    throw new Error("Not implemented: createTask");
  }

  completeTask(id: string): Task {
    throw new Error("Not implemented: completeTask");
  }

  listByStatus(status: TaskStatus): Task[] {
    throw new Error("Not implemented: listByStatus");
  }

  async processPending(handler: (task: Task) => Promise<void>): Promise<{ processed: number; failed: number }> {
    throw new Error("Not implemented: processPending");
  }
}
