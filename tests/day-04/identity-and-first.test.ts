import { describe, expect, test } from "bun:test";
import { first, identity, last } from "../../src/day-04/identity-and-first";

describe("day-04 identity-and-first", () => {
  test("identity", () => {
    expect(identity(5)).toBe(5);
    expect(identity("x")).toBe("x");
  });
  test("first", () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first([])).toBeUndefined();
  });
  test("last", () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([])).toBeUndefined();
  });
});