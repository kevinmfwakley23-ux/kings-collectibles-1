import type {
  CollectibleItem,
  VaultRepository,
} from "../index";

export class VaultService {
  constructor(
    private readonly repository: VaultRepository
  ) {}

  getItems(): CollectibleItem[] {
    return this.repository.getAll();
  }

  getItem(id: string) {
    return this.repository.getById(id);
  }

  exists(id: string) {
    return this.getItem(id) !== undefined;
  }

  getSummary() {
    const items = this.getItems();

    const totalEstimatedValue = items.reduce(
      (sum, item) => sum + item.estimatedValue,
      0
    );

    const favoriteItems = items.filter(
      (item) => item.favorite
    ).length;

    const totalCollections = new Set(
      items.map(
        (item) =>
          item.collectionId ??
          "Uncategorized"
      )
    ).size;

    return {
      totalItems: items.length,
      totalCollections,
      favoriteItems,
      totalEstimatedValue,
    };
  }

  addItem(item: CollectibleItem) {
    this.repository.save(item);
  }

  updateItem(item: CollectibleItem) {
    this.repository.update(item);
  }

  removeItem(id: string) {
    this.repository.delete(id);
  }

  removeItems(ids: string[]) {
    for (const id of ids) {
      this.repository.delete(id);
    }
  }

  clear() {
    this.repository.clear();
  }

  toggleFavorite(id: string) {
    const item = this.repository.getById(id);

    if (!item) {
      return;
    }

    this.repository.update({
      ...item,
      favorite: !item.favorite,
      updatedAt: new Date(),
    });
  }

  duplicate(id: string) {
    const item = this.repository.getById(id);

    if (!item) {
      return;
    }

    this.repository.save({
      ...item,
      id: crypto.randomUUID(),
      title: `${item.title} Copy`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
