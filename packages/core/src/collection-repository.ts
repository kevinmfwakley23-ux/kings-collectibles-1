import { Collection } from "./collection";

export class CollectionRepository {
  private readonly collections: Collection[] = [
    {
      id: "pokemon",

      name: "Pokémon Cards",

      description: "Primary trading card collection.",

      createdAt: new Date(),

      updatedAt: new Date(),

      itemCount: 1,

      estimatedValue: 5000,

      favorite: true,

      archived: false,
    },
  ];

  getAll(): Collection[] {
    return this.collections;
  }

  getById(id: string): Collection | undefined {
    return this.collections.find(
      (collection) => collection.id === id
    );
  }
}
