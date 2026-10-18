import { describe, expect, test } from "bun:test";
import { InMemoryRepository } from "../../src/day-04/typed-repository";

describe("day-04 typed-repository", () => {
  test("add and get", () => {
    const repo = new InMemoryRepository<{ id: string; name: string }>();
    repo.add({ id: "1", name: "Ada" });
    expect(repo.getById("1")?.name).toBe("Ada");
  });
  test("getAll", () => {
    const repo = new InMemoryRepository<{ id: string; name: string }>();
    repo.add({ id: "1", name: "Ada" });
    repo.add({ id: "2", name: "Bob" });
    expect(repo.getAll().length).toBe(2);
  });
  test("missing returns undefined", () => {
    const repo = new InMemoryRepository<{ id: string; name: string }>();
    expect(repo.getById("x")).toBeUndefined();
  });
  test("remove", () => {
    const repo = new InMemoryRepository<{ id: string; name: string }>();
    repo.add({ id: "1", name: "Ada" });
    expect(repo.remove("1")).toBe(true);
    expect(repo.getById("1")).toBeUndefined();
    expect(repo.remove("1")).toBe(false);
  });
});