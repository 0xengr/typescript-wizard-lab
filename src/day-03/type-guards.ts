/**
 * Day 3 — Exercise 3: Custom type guards
 *
 * Concept: `value is T`, runtime checks.
 * Scenario: Validating unknown payloads.
 *
 * Required:
 * - `User` type { id: string; name: string }.
 * - `isUser(value)` type guard.
 * - `parseUser(value)` returns User or null.
 *
 * Acceptance criteria:
 * - Rejects missing/invalid fields.
 * - Accepts valid objects.
 *
 * Edge cases:
 * - Extra fields allowed.
 * - null/undefined.
 *
 * Corresponding test: tests/day-03/type-guards.test.ts
 *
 * Hints:
 * 1. Check object and property types at runtime.
 * 2. Use `value is User` return type.
 * 3. Combine checks with `&&`.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export type User = {
  id: string;
  name: string;
};

export function isUser(value: unknown): value is User {
  throw new Error("Not implemented: isUser");
}

export function parseUser(value: unknown): User | null {
  throw new Error("Not implemented: parseUser");
}
