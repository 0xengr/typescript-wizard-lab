import { describe, expect, test } from "bun:test";
import { OrderService } from "../../src/day-05/order-service";

describe("day-05 order-service", () => {
  test("saves and notifies", () => {
    const saved: unknown[] = [];
    const messages: string[] = [];
    const repo = { save: (o: unknown) => saved.push(o) };
    const notifier = { notify: (m: string) => messages.push(m) };
    const service = new OrderService(repo, notifier);
    service.placeOrder({ id: "o1", total: 50 });
    expect(saved).toEqual([{ id: "o1", total: 50 }]);
    expect(messages).toEqual(["Order o1 placed"]);
  });
});