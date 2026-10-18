import { describe, expect, test } from "bun:test";
import { tryCatch, unwrapResult } from "../../src/day-06/result-error-handling";

describe("day-06 result-error-handling", () => {
  test("tryCatch success", async () => {
    const result = await tryCatch(async () => 42);
    expect(result).toEqual({ ok: true, value: 42 });
  });
  test("tryCatch failure", async () => {
    const result = await tryCatch(async () => {
      throw new Error("boom");
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.message).toBe("boom");
  });

  test("tryCatch captures synchronous throw", async () => {
    const result = await tryCatch(() => {
      throw new Error("sync");
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error.message).toBe("sync");
  });
  test("unwrapResult", () => {
    expect(unwrapResult({ ok: true, value: 7 })).toBe(7);
    expect(() => unwrapResult({ ok: false, error: new Error("nope") })).toThrow("nope");
  });
});