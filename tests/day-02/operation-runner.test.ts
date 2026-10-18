import { describe, expect, test } from "bun:test";
import { createMultiplier, runOperation } from "../../src/day-02/operation-runner";

describe("day-02 operation-runner", () => {
  test("runOperation invokes operation", () => {
    expect(runOperation((a, b) => a + b, 2, 3)).toBe(5);
  });
  test("createMultiplier scales first operand", () => {
    const double = createMultiplier(2);
    expect(runOperation(double, 4, 10)).toBe(8);
  });
  test("createMultiplier with zero", () => {
    const zero = createMultiplier(0);
    expect(runOperation(zero, 5, 7)).toBe(0);
  });
});