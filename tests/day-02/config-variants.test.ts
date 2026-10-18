import { describe, expect, test } from "bun:test";
import { defaultConfigs, isProduction } from "../../src/day-02/config-variants";

describe("day-02 config-variants", () => {
  test("isProduction true for production", () => {
    expect(isProduction({ env: "production", apiUrl: "https://x" })).toBe(true);
  });
  test("isProduction false for others", () => {
    expect(isProduction({ env: "development", apiUrl: "http://x" })).toBe(false);
    expect(isProduction({ env: "test", apiUrl: "http://x" })).toBe(false);
  });
  test("defaultConfigs has expected env literals", () => {
    expect(defaultConfigs.development.env).toBe("development");
    expect(defaultConfigs.production.debug).toBe(false);
  });
});