/**
 * Day 4 — Exercise 1: Generic functions
 *
 * Concept: Generic type parameters, inference.
 * Scenario: Reusable helpers for collections.
 *
 * Required:
 * - `identity(value)` returns the value unchanged.
 * - `first(items)` returns first element or undefined.
 * - `last(items)` returns last element or undefined.
 *
 * Acceptance criteria:
 * - Type is preserved.
 *
 * Edge cases:
 * - Empty arrays.
 *
 * Corresponding test: tests/day-04/identity-and-first.test.ts
 *
 * Hints:
 * 1. Use `<T>` type parameter.
 * 2. Return type should be `T` or `T | undefined`.
 * 3. Use indexing with length checks.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/generics.html
 */

export function identity<T>(value: T): T {
  throw new Error("Not implemented: identity");
}

export function first<T>(items: T[]): T | undefined {
  throw new Error("Not implemented: first");
}

export function last<T>(items: T[]): T | undefined {
  throw new Error("Not implemented: last");
}
