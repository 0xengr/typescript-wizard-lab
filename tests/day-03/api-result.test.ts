import { describe, expect, test } from "bun:test";
import { mapResult, unwrap } from "../../src/day-03/api-result";

describe("day-03 api-result", () => {
  test("unwrap returns data on success", () => {
    expect(unwrap({ ok: true, data: 42 })).toBe(42);
  });
  test("unwrap throws on failure", () => {
    expect(() => unwrap({ ok: false, error: "nope" })).toThrow("nope");
  });
  test("mapResult maps success", () => {
    expect(mapResult({ ok: true, data: 2 }, (n) => n * 2)).toEqual({ ok: true, data: 4 });
  });
  test("mapResult passes failure", () => {
    expect(mapResult({ ok: false, error: "err" }, (n: number) => n * 2)).toEqual({ ok: false, error: "err" });
  });
});