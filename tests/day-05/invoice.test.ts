import { describe, expect, test } from "bun:test";
import { Invoice } from "../../src/day-05/invoice";

describe("day-05 invoice", () => {
  test("total and format", () => {
    const inv = new Invoice("INV-1");
    inv.addItem({ description: "Widget", unitPrice: 2.5, quantity: 4 });
    inv.addItem({ description: "Gadget", unitPrice: 10, quantity: 1 });
    expect(inv.total()).toBe(20);
    expect(inv.format()).toBe("Invoice INV-1: 20.00");
  });
  test("empty invoice total 0", () => {
    const inv = new Invoice("INV-2");
    expect(inv.total()).toBe(0);
  });
});