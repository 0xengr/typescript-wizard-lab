/**
 * Day 1 — Exercise 5: Optional properties and defaults
 *
 * Concept: Optional properties, default values, strict configuration.
 * Scenario: Application settings can be partially provided by the user.
 *
 * Required:
 * - `AppSettings` interface with optional `theme`, `pageSize`, and `debug`.
 * - `resolveSettings(settings?)` returns a fully populated settings object.
 * - Defaults: theme "light", pageSize 20, debug false.
 *
 * Acceptance criteria:
 * - Missing fields receive defaults.
 * - Provided fields are preserved.
 *
 * Edge cases:
 * - Empty object input.
 * - `undefined` input.
 *
 * Corresponding test: tests/day-01/strict-settings.test.ts
 *
 * Hints:
 * 1. Use optional properties with `?`.
 * 2. Provide defaults with nullish coalescing or logical OR.
 * 3. Return a new object rather than mutating input.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/objects.html
 */

export interface AppSettings {
  theme?: "light" | "dark";
  pageSize?: number;
  debug?: boolean;
}

export function resolveSettings(settings?: AppSettings): Required<AppSettings> {
  throw new Error("Not implemented: resolveSettings");
}
