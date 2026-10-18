/**
 * Day 1 — Exercise 1: Type inference and explicit annotations
 *
 * Concept: Primitive types, arrays, explicit annotations, and inferred return types.
 * Scenario: You are formatting small reports for a classroom dashboard.
 *
 * Required:
 * - `averageScore(scores)` returns the arithmetic mean of the numbers.
 * - `formatReport(name, scores)` returns a string like "Ada: 90.00".
 * - `isPassing(score, threshold?)` returns whether the score meets the threshold.
 *
 * Acceptance criteria:
 * - Empty score arrays return 0 for the average.
 * - `formatReport` uses two decimal places for the average.
 * - The default passing threshold is 70.
 *
 * Edge cases:
 * - Empty arrays.
 * - Threshold of 0.
 * - Negative or fractional scores.
 *
 * Corresponding test: tests/day-01/type-inference.test.ts
 *
 * Hints:
 * 1. Decide which values need explicit annotations and which can be inferred.
 * 2. Use `Array.prototype.reduce` or a loop; remember to handle an empty array.
 * 3. Format numbers with `toFixed(2)` and compare with `>=`.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

export function averageScore(scores: number[]): number {
  throw new Error("Not implemented: averageScore");
}

export function formatReport(name: string, scores: number[]): string {
  throw new Error("Not implemented: formatReport");
}

export function isPassing(score: number, threshold: number = 70): boolean {
  throw new Error("Not implemented: isPassing");
}
