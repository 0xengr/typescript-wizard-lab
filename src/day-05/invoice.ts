/**
 * Day 5 — Exercise 1: Classes and access modifiers
 *
 * Concept: Classes, readonly/private fields, methods.
 * Scenario: An invoice aggregates line items.
 *
 * Required:
 * - `InvoiceItem` type { description: string; unitPrice: number; quantity: number }.
 * - `Invoice` class with readonly id, private items array.
 * - `addItem(item)`, `total()`, `format()`.
 *
 * Acceptance criteria:
 * - `total` sums unitPrice * quantity.
 * - `format` returns "Invoice <id>: <total>".
 *
 * Edge cases:
 * - No items.
 *
 * Corresponding test: tests/day-05/invoice.test.ts
 *
 * Hints:
 * 1. Use `private` for internal state.
 * 2. Use `readonly` for id.
 * 3. Compute total with reduce.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/classes.html
 */

export type InvoiceItem = {
  description: string;
  unitPrice: number;
  quantity: number;
};

export class Invoice {
  private items: InvoiceItem[] = [];

  constructor(public readonly id: string) {}

  addItem(item: InvoiceItem): void {
    throw new Error("Not implemented: addItem");
  }

  total(): number {
    throw new Error("Not implemented: total");
  }

  format(): string {
    throw new Error("Not implemented: format");
  }
}
