import { CollectibleItem } from "../item";

export class CollectionService {
  groupByCollection(
    items: CollectibleItem[]
  ) {
    const map = new Map<
      string,
      CollectibleItem[]
    >();

    for (const item of items) {
      const collection =
        item.collectionId ??
        "Uncategorized";

      if (!map.has(collection)) {
        map.set(collection, []);
      }

      map.get(collection)!.push(item);
    }

    return map;
  }

  getCollections(
    items: CollectibleItem[]
  ) {
    return [...this.groupByCollection(items)]
      .map(([id, items]) => ({
        id,
        name: id,
        itemCount: items.length,
        estimatedValue: items.reduce(
          (sum, item) =>
            sum + item.estimatedValue,
          0
        ),
      }))
      .sort((a, b) =>
        a.name.localeCompare(b.name)
      );
  }

  totalCollections(
    items: CollectibleItem[]
  ) {
    return this.groupByCollection(items)
      .size;
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
}
