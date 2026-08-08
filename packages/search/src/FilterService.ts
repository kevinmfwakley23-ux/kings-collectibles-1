import type { CollectibleItem } from "@kings/core";

import type {
  SortOption,
  VaultFilter,
} from "./filters/VaultFilter";

export class FilterService {
  apply(
    items: CollectibleItem[],
    filter: VaultFilter
  ): CollectibleItem[] {
    let results = [...items];

    if (filter.search.trim()) {
      const search = filter.search
        .trim()
        .toLowerCase();

      results = results.filter((item) =>
        [
          item.title,
          item.brand,
          item.category,
          item.collectionId,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search)
      );
    }

    if (filter.favoritesOnly) {
      results = results.filter(
        (item) => item.favorite
      );
    }

    if (filter.collectionId) {
      results = results.filter(
        (item) =>
          item.collectionId ===
          filter.collectionId
      );
    }

    if (filter.tags.length) {
      results = results.filter((item) =>
        filter.tags.every((tag) =>
          item.tags?.includes(tag)
        )
      );
    }

    if (filter.grades.length) {
      results = results.filter((item) =>
        filter.grades.includes(
          item.grade ?? ""
        )
      );
    }

    return this.sort(
      results,
      filter.sort
    );
  }

  private sort(
    items: CollectibleItem[],
    sort: SortOption
  ) {
    switch (sort) {
      case "name":
        return items.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

      case "value-high":
        return items.sort(
          (a, b) =>
            b.estimatedValue -
            a.estimatedValue
        );

      case "value-low":
        return items.sort(
          (a, b) =>
            a.estimatedValue -
            b.estimatedValue
        );

      case "oldest":
        return items.sort(
          (a, b) =>
            a.createdAt.getTime() -
            b.createdAt.getTime()
        );

      case "newest":
      default:
        return items.sort(
          (a, b) =>
            b.createdAt.getTime() -
            a.createdAt.getTime()
        );
    }
  }
}
