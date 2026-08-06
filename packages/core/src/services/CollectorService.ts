import { CollectibleItem } from "../item";

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
    if (items.length === 0) {
      return 0;
    }

    return (
      this.totalValue(items) /
      items.length
    );
  }

  highestValueItem(
    items: CollectibleItem[]
  ) {
    if (items.length === 0) {
      return null;
    }

    return [...items].sort(
      (a, b) =>
        b.estimatedValue -
        a.estimatedValue
    )[0];
  }
}
