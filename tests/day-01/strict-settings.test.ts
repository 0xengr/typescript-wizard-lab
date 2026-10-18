import { describe, expect, test } from "bun:test";
import { resolveSettings } from "../../src/day-01/strict-settings";

describe("day-01 strict-settings", () => {
  test("applies defaults for undefined", () => {
    expect(resolveSettings()).toEqual({ theme: "light", pageSize: 20, debug: false });
  });

  test("applies defaults for empty object", () => {
    expect(resolveSettings({})).toEqual({ theme: "light", pageSize: 20, debug: false });
  });

  test("preserves provided values", () => {
    expect(resolveSettings({ theme: "dark", pageSize: 50, debug: true })).toEqual({
      theme: "dark",
      pageSize: 50,
      debug: true,
    });
  });

  test("fills only missing fields", () => {
    expect(resolveSettings({ pageSize: 10 })).toEqual({ theme: "light", pageSize: 10, debug: false });
  });
});