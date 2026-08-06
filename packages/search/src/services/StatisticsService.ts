import { CollectibleItem } from "@kings/core";

export class StatisticsService {
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

    return (
      this.totalValue(items) /
      items.length
    );
  }

  favorites(
    items: CollectibleItem[]
  ) {
    return items.filter(
      (item) => item.favorite
    ).length;
  }

  favoriteItems(
    items: CollectibleItem[]
  ) {
    return this.favorites(items);
  }

  recent(
    items: CollectibleItem[],
    limit = 10
  ) {
    return [...items]
      .sort(
        (a, b) =>
          b.createdAt.getTime() -
          a.createdAt.getTime()
      )
      .slice(0, limit);
  }

  topValuable(
    items: CollectibleItem[],
    limit = 10
  ) {
    return [...items]
      .sort(
        (a, b) =>
          b.estimatedValue -
          a.estimatedValue
      )
      .slice(0, limit);
  }
}
