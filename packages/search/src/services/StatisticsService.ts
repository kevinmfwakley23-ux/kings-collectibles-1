import type { CollectibleItem } from "@kings/core";

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

  totalRookies(
    items: CollectibleItem[]
  ) {
    return items.filter(
      (item) => item.rookie
    ).length;
  }

  totalAutographs(
    items: CollectibleItem[]
  ) {
    return items.filter(
      (item) => item.autograph
    ).length;
  }

  totalMemorabilia(
    items: CollectibleItem[]
  ) {
    return items.filter(
      (item) => item.memorabilia
    ).length;
  }

  collectionBreakdown(
    items: CollectibleItem[]
  ) {
    const map = new Map<
      string,
      number
    >();

    for (const item of items) {
      const id =
        item.collectionId ??
        "Uncategorized";

      map.set(
        id,
        (map.get(id) ?? 0) + 1
      );
    }

    return [...map.entries()]
      .map(([name, count]) => ({
        name,
        count,
      }))
      .sort(
        (a, b) =>
          b.count - a.count
      );
  }
}
