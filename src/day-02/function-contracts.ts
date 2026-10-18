/**
 * Day 2 — Exercise 1: Function parameters and return types
 *
 * Concept: Explicit parameter/return types, optional and default parameters.
 * Scenario: Utility functions for numeric ranges and currency display.
 *
 * Required:
 * - `clamp(value, min, max)` constrains value to [min, max].
 * - `formatCurrency(amount, currency = "USD")` formats as "USD 10.00".
 *
 * Acceptance criteria:
 * - `clamp` returns min when value < min, max when value > max.
 * - Default currency is "USD".
 *
 * Edge cases:
 * - min > max (return min? or handle) — return min when invalid range.
 * - Negative amounts.
 *
 * Corresponding test: tests/day-02/function-contracts.test.ts
 *
 * Hints:
 * 1. Annotate parameters and return types explicitly.
 * 2. Use default parameter syntax for currency.
 * 3. Use Math.min/Math.max or conditionals.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/functions.html
 */

export function clamp(value: number, min: number, max: number): number {
  throw new Error("Not implemented: clamp");
}

export function formatCurrency(amount: number, currency: string = "USD"): string {
  throw new Error("Not implemented: formatCurrency");
}
