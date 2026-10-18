import { describe, expect, test } from "bun:test";
import { firstItem, getDisplayName, safeLength } from "../../src/day-03/nullable-access";

describe("day-03 nullable-access", () => {
  test("getDisplayName fallback", () => {
    expect(getDisplayName()).toBe("Anonymous");
    expect(getDisplayName(null)).toBe("Anonymous");
    expect(getDisplayName({})).toBe("Anonymous");
    expect(getDisplayName({ name: "Ada" })).toBe("Ada");
    expect(getDisplayName({ name: null })).toBe("Anonymous");
  });
  test("firstItem", () => {
    expect(firstItem([1, 2, 3])).toBe(1);
    expect(firstItem([])).toBeUndefined();
    expect(firstItem(null)).toBeUndefined();
  });
  test("safeLength", () => {
    expect(safeLength("hello")).toBe(5);
    expect(safeLength("")).toBe(0);
    expect(safeLength(null)).toBe(0);
    expect(safeLength()).toBe(0);
  });
});