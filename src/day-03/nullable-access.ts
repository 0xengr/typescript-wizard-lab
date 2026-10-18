/**
 * Day 3 — Exercise 4: Nullable values and optional properties
 *
 * Concept: Optional chaining, nullish coalescing.
 * Scenario: Displaying user info that may be missing.
 *
 * Required:
 * - `getDisplayName(user?)` returns name or "Anonymous".
 * - `firstItem(items?)` returns first element or undefined.
 * - `safeLength(value?)` returns string length or 0.
 *
 * Acceptance criteria:
 * - Handles undefined/null gracefully.
 *
 * Edge cases:
 * - Empty array.
 * - Empty string.
 *
 * Corresponding test: tests/day-03/nullable-access.test.ts
 *
 * Hints:
 * 1. Use optional chaining `?.`.
 * 2. Use nullish coalescing `??`.
 * 3. Distinguish null/undefined from 0/"".
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export function getDisplayName(user?: { name?: string | null } | null): string {
  throw new Error("Not implemented: getDisplayName");
}

export function firstItem<T>(items?: T[] | null): T | undefined {
  throw new Error("Not implemented: firstItem");
}

export function safeLength(value?: string | null): number {
  throw new Error("Not implemented: safeLength");
}
