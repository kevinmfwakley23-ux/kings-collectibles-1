import { CollectibleItem } from "@kings/core";

export class SearchService {
  search(
    items: CollectibleItem[],
    query: string
  ): CollectibleItem[] {
    const search = query
      .trim()
      .toLowerCase();

    if (!search) {
      return items;
    }

    return items.filter((item) =>
      [
        item.title,
        item.brand,
        item.category,
        item.collectionId,
        ...(item.tags ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }
}
