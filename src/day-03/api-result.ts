/**
 * Day 3 — Exercise 2: API response modeling and narrowing
 *
 * Concept: Discriminated unions, generic result types.
 * Scenario: Wrapping API calls in a result type.
 *
 * Required:
 * - `ApiResult<T>` = success { ok: true; data: T } | failure { ok: false; error: string }.
 * - `unwrap(result)` returns data or throws Error with error message.
 * - `mapResult(result, fn)` maps success data, passes failure through.
 *
 * Acceptance criteria:
 * - `unwrap` throws on failure.
 * - `mapResult` preserves failure.
 *
 * Edge cases:
 * - null data.
 *
 * Corresponding test: tests/day-03/api-result.test.ts
 *
 * Hints:
 * 1. Discriminate on `ok`.
 * 2. Narrow before accessing `data`.
 * 3. Preserve generic type parameter.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export function unwrap<T>(result: ApiResult<T>): T {
  throw new Error("Not implemented: unwrap");
}

export function mapResult<T, U>(result: ApiResult<T>, fn: (value: T) => U): ApiResult<U> {
  throw new Error("Not implemented: mapResult");
}
