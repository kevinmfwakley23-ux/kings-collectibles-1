import type { CollectibleItem } from "./item";

export class Vault {
  constructor(
    private readonly items: CollectibleItem[] = []
  ) {}

  getItems(): CollectibleItem[] {
    return this.items;
  }

  getSummary() {
    const totalItems = this.items.length;

    const totalValue = this.items.reduce(
      (sum, item) =>
        sum + item.estimatedValue,
      0
    );

    const favorites = this.items.filter(
      (item) => item.favorite
    ).length;

    return {
      totalItems,
      totalValue,
      favorites,
    };
  }
}
