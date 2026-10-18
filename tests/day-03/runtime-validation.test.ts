import { describe, expect, test } from "bun:test";
import { validateAge, validateEmail } from "../../src/day-03/runtime-validation";

describe("day-03 runtime-validation", () => {
  test("validateEmail", () => {
    expect(validateEmail("a@b.com")).toBe(true);
    expect(validateEmail("invalid")).toBe(false);
    expect(validateEmail(123)).toBe(false);
  });
  test("validateAge", () => {
    expect(validateAge(25)).toBe(25);
    expect(validateAge(0)).toBe(0);
    expect(validateAge(120)).toBe(120);
    expect(validateAge(121)).toBeNull();
    expect(validateAge(1.5)).toBeNull();
    expect(validateAge("25")).toBeNull();
  });
});