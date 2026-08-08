import type { CollectibleItem } from "@kings/core";

export class CollectionAnalyticsService {
  totalItems(
    items: CollectibleItem[]
  ) {
    return items.length;
  }

  totalValue(
    items: CollectibleItem[]
  ) {
    return items.reduce(
      (sum, item) =>
        sum + item.estimatedValue,
      0
    );
  }

  averageValue(
    items: CollectibleItem[]
  ) {
    if (!items.length) {
      return 0;
    }

    return this.totalValue(items) / items.length;
  }

  favoriteCount(
    items: CollectibleItem[]
  ) {
    return items.filter(
      (item) => item.favorite
    ).length;
  }

  highestValue(
    items: CollectibleItem[]
  ) {
    if (!items.length) return 0;

    return Math.max(
      ...items.map(
        (item) => item.estimatedValue
      )
    );
  }

  lowestValue(
    items: CollectibleItem[]
  ) {
    if (!items.length) return 0;

    return Math.min(
      ...items.map(
        (item) => item.estimatedValue
      )
    );
  }
}
