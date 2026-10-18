import { describe, expect, test } from "bun:test";
import { createUserProfile, withEmail } from "../../src/day-01/user-profile";
import type { UserProfile } from "../../src/day-01/user-profile";

describe("day-01 user-profile", () => {
  test("creates profile with optional fields undefined", () => {
    const profile = createUserProfile("1", "Ada");
    expect(profile.id).toBe("1");
    expect(profile.name).toBe("Ada");
    expect(profile.email).toBeUndefined();
    expect(profile.age).toBeUndefined();
  });

  test("withEmail returns new profile and does not mutate original", () => {
    const original = createUserProfile("1", "Ada");
    const updated = withEmail(original, "ada@example.com");
    expect(updated.email).toBe("ada@example.com");
    expect(original.email).toBeUndefined();
    expect(updated).not.toBe(original);
  });

  test("withEmail can be applied multiple times", () => {
    const profile = createUserProfile("2", "Bob");
    const first = withEmail(profile, "first@example.com");
    const second = withEmail(first, "second@example.com");
    expect(second.email).toBe("second@example.com");
    expect(first.email).toBe("first@example.com");
  });
});