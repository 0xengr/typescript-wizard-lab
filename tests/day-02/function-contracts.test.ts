import { describe, expect, test } from "bun:test";
import { clamp, formatCurrency } from "../../src/day-02/function-contracts";

describe("day-02 function-contracts", () => {
  test("clamp within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  test("clamp below min", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });
  test("clamp above max", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  test("formatCurrency default", () => {
    expect(formatCurrency(10)).toBe("USD 10.00");
  });
  test("formatCurrency custom", () => {
    expect(formatCurrency(10, "EUR")).toBe("EUR 10.00");
  });
});