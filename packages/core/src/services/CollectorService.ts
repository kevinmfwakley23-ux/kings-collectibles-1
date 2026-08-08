import type { CollectibleItem } from "../item";

export class CollectorService {
  totalItems(
    items: CollectibleItem[]
  ) {
    return items.length;
  }

  favoriteCount(
    items: CollectibleItem[]
  ) {
    return items.filter(
      (item) => item.favorite
    ).length;
  }

  collectionValue(
    items: CollectibleItem[]
  ) {
    return items.reduce(
      (sum, item) =>
        sum + item.estimatedValue,
      0
    );
  }

  totalValue(
    items: CollectibleItem[]
  ) {
    return this.collectionValue(items);
  }

  averageValue(
    items: CollectibleItem[]
  ) {
    if (!items.length) return 0;

    return (
      this.collectionValue(items) /
      items.length
    );
  }

  highestValueItem(
    items: CollectibleItem[]
  ) {
    return [...items].sort(
      (a, b) =>
        b.estimatedValue -
        a.estimatedValue
    )[0] ?? null;
  }

  lowestValueItem(
    items: CollectibleItem[]
  ) {
    return [...items].sort(
      (a, b) =>
        a.estimatedValue -
        b.estimatedValue
    )[0] ?? null;
  }
}
