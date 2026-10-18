import { describe, expect, test } from "bun:test";
import { greet, rename } from "../../src/day-05/structural-typing";

describe("day-05 structural-typing", () => {
  test("greet uses name", () => {
    expect(greet({ name: "Ada" })).toBe("Hello, Ada");
    const person = { name: "Bob", age: 30 };
    expect(greet(person)).toBe("Hello, Bob");
  });
  test("rename updates name and preserves props", () => {
    const original = { name: "Ada", age: 30 };
    const updated = rename(original, "Bob");
    expect(updated.name).toBe("Bob");
    expect(updated.age).toBe(30);
    expect(original.name).toBe("Ada");
  });
});