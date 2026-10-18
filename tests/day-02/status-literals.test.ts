import { describe, expect, test } from "bun:test";
import { ALL_STATUSES, describeStatus } from "../../src/day-02/status-literals";

describe("day-02 status-literals", () => {
  test("describeStatus labels", () => {
    expect(describeStatus("todo")).toBe("To do");
    expect(describeStatus("doing")).toBe("In progress");
    expect(describeStatus("done")).toBe("Done");
  });
  test("ALL_STATUSES contains all", () => {
    expect(ALL_STATUSES).toEqual(["todo", "doing", "done"]);
  });
});