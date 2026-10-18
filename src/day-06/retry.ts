/**
 * Day 6 — Exercise 2: Retrying async work
 *
 * Concept: async/await, error handling, generics.
 * Scenario: Retrying a flaky operation.
 *
 * Required:
 * - `retry(fn, attempts, delayMs = 0)` retries on thrown error.
 * - Returns result on success.
 * - Throws last error if all attempts fail.
 *
 * Acceptance criteria:
 * - Calls fn up to attempts times.
 * - Stops early on success.
 *
 * Edge cases:
 * - attempts = 1.
 *
 * Corresponding test: tests/day-06/retry.test.ts
 *
 * Hints:
 * 1. Loop attempts times.
 * 2. Try/await inside loop.
 * 3. Store last error.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

export async function retry<T>(
  fn: () => Promise<T>,
  attempts: number,
  delayMs: number = 0,
): Promise<T> {
  throw new Error("Not implemented: retry");
}
