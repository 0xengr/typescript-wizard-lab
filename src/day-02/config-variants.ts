/**
 * Day 2 — Exercise 3: Union, intersection, literal types, satisfies
 *
 * Concept: Union/intersection types, literal types, `as const`, `satisfies`.
 * Scenario: App configuration differs by environment.
 *
 * Required:
 * - `Environment` union of "development" | "production" | "test".
 * - `BaseConfig` with `apiUrl` and optional `debug`.
 * - `Config` intersection-ish: { env: Environment } & BaseConfig.
 * - `isProduction(config)` checks env.
 * - `defaultConfigs` object using `as const` and `satisfies`.
 *
 * Acceptance criteria:
 * - `defaultConfigs.development.env` is typed as "development".
 * - `isProduction` returns true only for production.
 *
 * Edge cases:
 * - Unknown environment strings are not allowed at compile time.
 *
 * Corresponding test: tests/day-02/config-variants.test.ts
 *
 * Hints:
 * 1. Use string literal unions.
 * 2. Combine types with `&`.
 * 3. Use `satisfies` to validate while preserving literal types.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

export type Environment = "development" | "production" | "test";

export type BaseConfig = {
  apiUrl: string;
  debug?: boolean;
};

export type Config = {
  env: Environment;
} & BaseConfig;

export function isProduction(config: Config): boolean {
  throw new Error("Not implemented: isProduction");
}

export const defaultConfigs = {
  development: { env: "development", apiUrl: "http://localhost:3000", debug: true },
  production: { env: "production", apiUrl: "https://api.example.com", debug: false },
  test: { env: "test", apiUrl: "http://localhost:4000", debug: true },
} as const satisfies Record<Environment, Config>;
