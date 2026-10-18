/**
 * Day 1 — Exercise 2: Object shapes and optional properties
 *
 * Concept: Interfaces, optional properties, readonly fields, immutable updates.
 * Scenario: A small app stores user profiles that may be updated over time.
 *
 * Required:
 * - `UserProfile` interface with readonly `id`, required `name`, optional `email` and `age`.
 * - `createUserProfile(id, name)` builds a profile.
 * - `withEmail(profile, email)` returns a new profile with the email set, without mutating input.
 *
 * Acceptance criteria:
 * - The original profile is not mutated by `withEmail`.
 * - Optional fields are `undefined` when absent.
 *
 * Edge cases:
 * - Empty email string.
 * - Updating email multiple times.
 *
 * Corresponding test: tests/day-01/user-profile.test.ts
 *
 * Hints:
 * 1. Model the shape first; decide what is optional.
 * 2. Use `readonly` on `id` to prevent reassignment.
 * 3. Return a spread copy instead of mutating the original object.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/objects.html
 */

export interface UserProfile {
  readonly id: string;
  name: string;
  email?: string;
  age?: number;
}

export function createUserProfile(id: string, name: string): UserProfile {
  throw new Error("Not implemented: createUserProfile");
}

export function withEmail(profile: UserProfile, email: string): UserProfile {
  throw new Error("Not implemented: withEmail");
}
