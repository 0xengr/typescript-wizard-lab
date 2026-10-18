/**
 * Day 6 — Exercise 4: Runtime validation at boundaries
 *
 * Concept: Validating external data.
 * Scenario: Parsing unknown API payloads.
 *
 * Required:
 * - `parseUserDto(value)` returns UserDto or null.
 * - Validates id, first_name, last_name strings.
 *
 * Acceptance criteria:
 * - Rejects invalid payloads.
 *
 * Edge cases:
 * - Extra fields allowed.
 *
 * Corresponding test: tests/day-06/boundary-validation.test.ts
 *
 * Hints:
 * 1. Check object and fields.
 * 2. email optional but must be string if present.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

import type { UserDto } from "./dto-mapping";

export function parseUserDto(value: unknown): UserDto | null {
  throw new Error("Not implemented: parseUserDto");
}
