/**
 * Day 6 — Exercise 1: Typed async returns
 *
 * Concept: Promises, async/await, typed returns, injected fetch.
 * Scenario: Loading a user from an API without network in tests.
 *
 * Required:
 * - `UserDto` type { id, name, email? }.
 * - `fetchUser(fetcher, id)` returns Promise<UserDto>.
 * - Throws if response not ok or payload invalid.
 *
 * Acceptance criteria:
 * - Uses provided fetcher.
 * - Validates payload shape.
 *
 * Edge cases:
 * - 404 response.
 * - Malformed JSON.
 *
 * Corresponding test: tests/day-06/fetch-user.test.ts
 *
 * Hints:
 * 1. Await fetcher and check `ok`.
 * 2. Parse JSON and validate.
 * 3. Throw Error on failure.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

export type UserDto = {
  id: string;
  name: string;
  email?: string;
};

export type Fetcher = (url: string) => Promise<{
  ok: boolean;
  status: number;
  json: () => Promise<unknown>;
}>;

export async function fetchUser(fetcher: Fetcher, id: string): Promise<UserDto> {
  throw new Error("Not implemented: fetchUser");
}
