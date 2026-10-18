/**
 * Day 4 — Exercise 4: Utility types
 *
 * Concept: `Partial`, `Required`, `Pick`, `Omit`.
 * Scenario: Updating user records.
 *
 * Required:
 * - `User` type with id, name, optional email/age.
 * - `applyUpdates(user, updates)` merges partial updates.
 * - `publicUser(user)` returns `Pick<User, "id" | "name">`.
 * - `withoutAge(user)` returns `Omit<User, "age">`.
 *
 * Acceptance criteria:
 * - `applyUpdates` returns new object.
 * - Undefined updates do not erase existing fields? (skip undefined)
 *
 * Edge cases:
 * - Empty updates.
 *
 * Corresponding test: tests/day-04/user-updates.test.ts
 *
 * Hints:
 * 1. Use `Partial<User>` for updates.
 * 2. Spread and filter undefined.
 * 3. Use Pick/Omit in return types.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

export type User = {
  id: string;
  name: string;
  email?: string;
  age?: number;
};

export function applyUpdates(user: User, updates: Partial<User>): User {
  throw new Error("Not implemented: applyUpdates");
}

export function publicUser(user: User): Pick<User, "id" | "name"> {
  throw new Error("Not implemented: publicUser");
}

export function withoutAge(user: User): Omit<User, "age"> {
  throw new Error("Not implemented: withoutAge");
}
