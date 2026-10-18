import { describe, expect, test } from "bun:test";
import { isSuccess, renderStatus } from "../../src/day-03/status-renderer";

describe("day-03 status-renderer", () => {
  test("renders idle", () => {
    expect(renderStatus({ kind: "idle" })).toBe("Idle");
  });
  test("renders loading", () => {
    expect(renderStatus({ kind: "loading" })).toBe("Loading...");
  });
  test("renders success", () => {
    expect(renderStatus({ kind: "success", data: "done" })).toBe("Success: done");
  });
  test("renders error", () => {
    expect(renderStatus({ kind: "error", message: "boom" })).toBe("Error: boom");
  });
  test("isSuccess narrows", () => {
    const s = { kind: "success" as const, data: "x" };
    expect(isSuccess(s)).toBe(true);
    expect(isSuccess({ kind: "idle" })).toBe(false);
  });
});