import type { Collection } from "../collection";

export class CollectionFactory {
  static create(
    name: string,
    description = ""
  ): Collection {
    const now = new Date();

    return {
      id: crypto.randomUUID(),

      name,

      description,

      createdAt: now,

      updatedAt: now,

      itemCount: 0,

      estimatedValue: 0,

      favorite: false,

      archived: false,
    };
  }
}
