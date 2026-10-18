import { describe, expect, test } from "bun:test";
import { calculateOrderTotal, formatOrderSummary } from "../../src/day-05/module-boundaries";

describe("day-05 module-boundaries", () => {
  test("calculates total", () => {
    expect(calculateOrderTotal([{ price: 2, quantity: 3 }, { price: 1.5, quantity: 2 }])).toBe(9);
  });
  test("empty total 0", () => {
    expect(calculateOrderTotal([])).toBe(0);
  });
  test("formats summary", () => {
    expect(formatOrderSummary("o1", 9)).toBe("Order o1 total: 9.00");
  });
});