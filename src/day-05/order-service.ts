/**
 * Day 5 — Exercise 3: Composition over inheritance
 *
 * Concept: Composition, explicit dependencies.
 * Scenario: Placing an order uses repository and notifier.
 *
 * Required:
 * - `Order` type { id: string; total: number }.
 * - `OrderRepository` interface { save(order): void }.
 * - `Notifier` interface { notify(message): void }.
 * - `OrderService` composes both and implements `placeOrder(order)`.
 *
 * Acceptance criteria:
 * - Saves order and notifies.
 *
 * Edge cases:
 * - None.
 *
 * Corresponding test: tests/day-05/order-service.test.ts
 *
 * Hints:
 * 1. Inject dependencies via constructor.
 * 2. Call save then notify.
 * 3. Keep classes small.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/classes.html
 */

export type Order = {
  id: string;
  total: number;
};

export interface OrderRepository {
  save(order: Order): void;
}

export interface Notifier {
  notify(message: string): void;
}

export class OrderService {
  constructor(
    private readonly repository: OrderRepository,
    private readonly notifier: Notifier,
  ) {}

  placeOrder(order: Order): void {
    throw new Error("Not implemented: placeOrder");
  }
}
