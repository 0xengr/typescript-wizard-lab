/**
 * Day 5 — Exercise 5: Module boundaries and domain logic
 *
 * Concept: Separating domain logic from infrastructure.
 * Scenario: Computing order totals independent of storage.
 *
 * Required:
 * - `LineItem` type { price: number; quantity: number }.
 * - `calculateOrderTotal(items)` sums price * quantity.
 * - `formatOrderSummary(id, total)` returns string.
 *
 * Acceptance criteria:
 * - Pure functions, no side effects.
 *
 * Edge cases:
 * - Empty items.
 *
 * Corresponding test: tests/day-05/module-boundaries.test.ts
 *
 * Hints:
 * 1. Keep functions pure.
 * 2. Use reduce.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/modules.html
 */

export type LineItem = {
  price: number;
  quantity: number;
};

export function calculateOrderTotal(items: LineItem[]): number {
  throw new Error("Not implemented: calculateOrderTotal");
}

export function formatOrderSummary(id: string, total: number): string {
  throw new Error("Not implemented: formatOrderSummary");
}
