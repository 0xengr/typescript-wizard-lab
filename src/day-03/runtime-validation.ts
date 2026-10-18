/**
 * Day 3 — Exercise 5: Runtime validation
 *
 * Concept: Runtime vs compile-time types.
 * Scenario: Validating untrusted input at boundaries.
 *
 * Required:
 * - `validateEmail(value)` returns true if string and matches basic email regex.
 * - `validateAge(value)` returns number if integer 0..120 else null.
 *
 * Acceptance criteria:
 * - Rejects non-strings and malformed emails.
 * - Rejects non-integers and out-of-range ages.
 *
 * Edge cases:
 * - Whitespace.
 * - Boolean age.
 *
 * Corresponding test: tests/day-03/runtime-validation.test.ts
 *
 * Hints:
 * 1. Validate runtime type first.
 * 2. Use a simple regex for email.
 * 3. Use Number.isInteger and range checks.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export function validateEmail(value: unknown): boolean {
  throw new Error("Not implemented: validateEmail");
}

export function validateAge(value: unknown): number | null {
  throw new Error("Not implemented: validateAge");
}
