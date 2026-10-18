/**
 * Day 2 — Exercise 5: Literal types and as const
 *
 * Concept: Literal types, `as const`.
 * Scenario: A task can be in a fixed set of statuses.
 *
 * Required:
 * - `TaskStatus` type: "todo" | "doing" | "done".
 * - `describeStatus(status)` returns a human label.
 * - `ALL_STATUSES` readonly tuple of all statuses.
 *
 * Acceptance criteria:
 * - `ALL_STATUSES` is readonly and contains all three.
 *
 * Edge cases:
 * - None.
 *
 * Corresponding test: tests/day-02/status-literals.test.ts
 *
 * Hints:
 * 1. Use string literal union.
 * 2. Use `as const` on the array.
 * 3. Map statuses to labels in a record or switch.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

export type TaskStatus = "todo" | "doing" | "done";

export function describeStatus(status: TaskStatus): string {
  throw new Error("Not implemented: describeStatus");
}

export const ALL_STATUSES = ["todo", "doing", "done"] as const;
