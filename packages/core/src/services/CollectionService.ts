import type { CollectibleItem } from "../item";

export type CollectionSummary = {
  id: string;
  name: string;
  itemCount: number;
  estimatedValue: number;
};

export class CollectionService {
  groupByCollection(
    items: CollectibleItem[]
  ) {
    const map = new Map<
      string,
      CollectibleItem[]
    >();

    for (const item of items) {
      const id =
        item.collectionId ??
        "Uncategorized";

      if (!map.has(id)) {
        map.set(id, []);
      }

      map.get(id)!.push(item);
    }

    return map;
  }

  getCollections(
    items: CollectibleItem[]
  ): CollectionSummary[] {
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

  getCollection(
    items: CollectibleItem[],
    id: string
  ) {
    return items.filter(
      (item) =>
        item.collectionId === id
    );
  }

  renameCollection(
    items: CollectibleItem[],
    oldId: string,
    newId: string
  ) {
    return items.map((item) =>
      item.collectionId === oldId
        ? {
            ...item,
            collectionId: newId,
            updatedAt: new Date(),
          }
        : item
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
