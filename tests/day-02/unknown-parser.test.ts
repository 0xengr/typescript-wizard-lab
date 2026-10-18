import { describe, expect, test } from "bun:test";
import { parseNumber, parseString } from "../../src/day-02/unknown-parser";

describe("day-02 unknown-parser", () => {
  test("parseNumber passes numbers", () => {
    expect(parseNumber(42)).toBe(42);
  });
  test("parseNumber parses numeric strings", () => {
    expect(parseNumber("3.5")).toBe(3.5);
  });
  test("parseNumber rejects invalid", () => {
    expect(parseNumber("abc")).toBeNull();
    expect(parseNumber("")).toBeNull();
    expect(parseNumber("   ")).toBeNull();
    expect(parseNumber(null)).toBeNull();
    expect(parseNumber({})).toBeNull();
  });
  test("parseString passes strings", () => {
    expect(parseString("hello")).toBe("hello");
  });
  test("parseString rejects non-strings", () => {
    expect(parseString(123)).toBeNull();
    expect(parseString(null)).toBeNull();
  });
});