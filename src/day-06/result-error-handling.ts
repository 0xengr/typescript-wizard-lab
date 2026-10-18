/**
 * Day 6 — Exercise 5: Error handling
 *
 * Concept: Result types, typed errors.
 * Scenario: Wrapping async operations.
 *
 * Required:
 * - `Result<T, E = Error>` discriminated union.
 * - `tryCatch(fn)` returns Promise<Result<T, Error>>.
 * - `unwrapResult(result)` returns value or throws.
 *
 * Acceptance criteria:
 * - Captures thrown errors.
 *
 * Edge cases:
 * - Synchronous throw inside fn.
 *
 * Corresponding test: tests/day-06/result-error-handling.test.ts
 *
 * Hints:
 * 1. Use try/catch around await.
 * 2. Normalize caught value to Error.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export async function tryCatch<T>(fn: () => Promise<T>): Promise<Result<T, Error>> {
  throw new Error("Not implemented: tryCatch");
}

export function unwrapResult<T>(result: Result<T, Error>): T {
  throw new Error("Not implemented: unwrapResult");
}
