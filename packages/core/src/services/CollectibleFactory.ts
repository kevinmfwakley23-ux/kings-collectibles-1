import { CollectibleItem } from "../item";

export class CollectibleFactory {
  static create(
    data: Partial<CollectibleItem> &
      Pick<CollectibleItem, "title">
  ): CollectibleItem {
    const now = new Date();

    return {
      id: crypto.randomUUID(),

      collectionId:
        data.collectionId ?? "default",

      title: data.title,

      category:
        data.category ??
        "Trading Card",

      manufacturer:
        data.manufacturer ?? "",

      brand: data.brand ?? "",

      series: data.series ?? "",

      year: data.year,

      condition:
        data.condition ?? "",

      gradingCompany:
        data.gradingCompany ?? "",

      grade: data.grade ?? "",

      estimatedValue:
        data.estimatedValue ?? 0,

      purchasePrice:
        data.purchasePrice,

      acquiredOn:
        data.acquiredOn ?? now,

      notes: data.notes ?? "",

      imageIds:
        data.imageIds ?? [],

      favorite:
        data.favorite ?? false,

      rookie:
        data.rookie ?? false,

      autograph:
        data.autograph ?? false,

      memorabilia:
        data.memorabilia ?? false,

      tags: data.tags ?? [],

      createdAt:
        data.createdAt ?? now,

      updatedAt:
        data.updatedAt ?? now,
    };
  }
}
