/**
 * Day 6 — Exercise 3: DTOs and domain types
 *
 * Concept: Mapping between transport and domain types.
 * Scenario: API uses snake_case, app uses camelCase.
 *
 * Required:
 * - `UserDto` { id; first_name; last_name; email? }.
 * - `User` { id; fullName; email? }.
 * - `toDomain(dto)` and `toDto(user)`.
 *
 * Acceptance criteria:
 * - Names combine correctly.
 *
 * Edge cases:
 * - Missing email.
 *
 * Corresponding test: tests/day-06/dto-mapping.test.ts
 *
 * Hints:
 * 1. Define both types.
 * 2. Concatenate first/last.
 * 3. Map back by splitting fullName (assume first + rest).
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

export type UserDto = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
};

export type User = {
  id: string;
  fullName: string;
  email?: string;
};

export function toDomain(dto: UserDto): User {
  throw new Error("Not implemented: toDomain");
}

export function toDto(user: User): UserDto {
  throw new Error("Not implemented: toDto");
}
