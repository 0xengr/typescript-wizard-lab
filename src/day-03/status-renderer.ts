/**
 * Day 3 — Exercise 1: Discriminated unions and exhaustive checking
 *
 * Concept: Discriminated unions, narrowing, exhaustive switch.
 * Scenario: UI renders different views based on a status.
 *
 * Required:
 * - `Status` discriminated union with `kind`: idle | loading | success (data) | error (message).
 * - `renderStatus(status)` returns a display string.
 * - `isSuccess(status)` type guard.
 *
 * Acceptance criteria:
 * - Each kind renders a distinct message.
 * - Exhaustive handling (no fallthrough).
 *
 * Edge cases:
 * - Success with empty data.
 *
 * Corresponding test: tests/day-03/status-renderer.test.ts
 *
 * Hints:
 * 1. Use a common `kind` discriminant.
 * 2. Switch on `status.kind`.
 * 3. Use a `never` check in default for exhaustiveness.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; data: string }
  | { kind: "error"; message: string };

export function renderStatus(status: Status): string {
  throw new Error("Not implemented: renderStatus");
}

export function isSuccess(status: Status): status is { kind: "success"; data: string } {
  throw new Error("Not implemented: isSuccess");
}
