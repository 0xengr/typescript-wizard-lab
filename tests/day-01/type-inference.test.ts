import { describe, expect, test } from "bun:test";
import { averageScore, formatReport, isPassing } from "../../src/day-01/type-inference";

describe("day-01 type-inference", () => {
  test("averageScore returns the mean", () => {
    expect(averageScore([80, 90, 100])).toBe(90);
  });

  test("averageScore handles empty array", () => {
    expect(averageScore([])).toBe(0);
  });

  test("formatReport uses two decimals", () => {
    expect(formatReport("Ada", [80, 90, 100])).toBe("Ada: 90.00");
  });

  test("isPassing uses default threshold 70", () => {
    expect(isPassing(70)).toBe(true);
    expect(isPassing(69)).toBe(false);
  });

  test("isPassing respects custom threshold", () => {
    expect(isPassing(50, 40)).toBe(true);
    expect(isPassing(30, 40)).toBe(false);
  });
});