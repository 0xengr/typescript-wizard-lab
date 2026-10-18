import { describe, expect, test } from "bun:test";
import { getProperty, setProperty } from "../../src/day-04/property-access";

describe("day-04 property-access", () => {
  test("getProperty", () => {
    const obj = { a: 1, b: "x" };
    expect(getProperty(obj, "a")).toBe(1);
    expect(getProperty(obj, "b")).toBe("x");
  });
  test("setProperty returns new object", () => {
    const obj = { a: 1, b: "x" };
    const updated = setProperty(obj, "a", 2);
    expect(updated.a).toBe(2);
    expect(obj.a).toBe(1);
  });
});