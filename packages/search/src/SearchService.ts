import type { CollectibleItem } from "@kings/core";

export class SearchService {
  search(
    items: CollectibleItem[],
    query: string
  ) {
    const text = query
      .trim()
      .toLowerCase();

    if (!text) {
      return items;
    }

    return items.filter((item) =>
      [
        item.title,
        item.brand,
        item.category,
        item.series,
        item.collectionId,
        ...(item.tags ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(text)
    );
  }
}
