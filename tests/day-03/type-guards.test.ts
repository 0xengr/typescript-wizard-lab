import { describe, expect, test } from "bun:test";
import { isUser, parseUser } from "../../src/day-03/type-guards";

describe("day-03 type-guards", () => {
  test("isUser accepts valid", () => {
    expect(isUser({ id: "1", name: "Ada" })).toBe(true);
  });
  test("isUser rejects invalid", () => {
    expect(isUser(null)).toBe(false);
    expect(isUser({ id: 1, name: "Ada" })).toBe(false);
    expect(isUser({ id: "1" })).toBe(false);
  });
  test("parseUser returns user or null", () => {
    expect(parseUser({ id: "1", name: "Ada" })).toEqual({ id: "1", name: "Ada" });
    expect(parseUser(123)).toBeNull();
  });
});