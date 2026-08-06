import {
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
          item.collectionId ?? "Uncategorized"
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

  toggleFavorite(id: string) {
    const item = this.repository.getById(id);

    if (!item) {
      return;
    }

    this.repository.update({
      ...item,
      favorite: !item.favorite,
    });
  }

  clear() {
    this.repository.clear();
  }
}
