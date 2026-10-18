import { describe, expect, test } from "bun:test";
import { retry } from "../../src/day-06/retry";

describe("day-06 retry", () => {
  test("returns on first success", async () => {
    let calls = 0;
    const result = await retry(async () => {
      calls += 1;
      return "ok";
    }, 3);
    expect(result).toBe("ok");
    expect(calls).toBe(1);
  });

  test("retries then succeeds", async () => {
    let calls = 0;
    const result = await retry(async () => {
      calls += 1;
      if (calls < 3) throw new Error("fail");
      return "done";
    }, 3);
    expect(result).toBe("done");
    expect(calls).toBe(3);
  });

  test("throws last error after all attempts", async () => {
    let calls = 0;
    await expect(
      retry(async () => {
        calls += 1;
        throw new Error(`err${calls}`);
      }, 2),
    ).rejects.toThrow("err2");
    expect(calls).toBe(2);
  });
});