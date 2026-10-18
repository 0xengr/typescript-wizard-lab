import { describe, expect, test } from "bun:test";
import { fetchUser } from "../../src/day-06/fetch-user";

describe("day-06 fetch-user", () => {
  test("returns user on success", async () => {
    const fetcher = async () => ({
      ok: true,
      status: 200,
      json: async () => ({ id: "1", name: "Ada", email: "a@b.com" }),
    });
    const user = await fetchUser(fetcher, "1");
    expect(user).toEqual({ id: "1", name: "Ada", email: "a@b.com" });
  });

  test("throws on not ok", async () => {
    const fetcher = async () => ({ ok: false, status: 404, json: async () => ({}) });
    await expect(fetchUser(fetcher, "1")).rejects.toThrow(/failed to fetch/i);
  });

  test("throws on invalid payload", async () => {
    const fetcher = async () => ({ ok: true, status: 200, json: async () => ({ id: 1 }) });
    await expect(fetchUser(fetcher, "1")).rejects.toThrow(/invalid user/i);
  });
});