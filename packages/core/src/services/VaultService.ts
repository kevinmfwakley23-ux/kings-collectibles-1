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

  getAll(): CollectibleItem[] {
    return this.repository.getAll();
  }

  getItem(id: string) {
    return this.repository.getById(id);
  }

  get(id: string) {
    return this.repository.getById(id);
  }

  addItem(item: CollectibleItem) {
    this.repository.save(item);
  }

  save(item: CollectibleItem) {
    this.repository.save(item);
  }

  updateItem(item: CollectibleItem) {
    this.repository.update(item);
  }

  update(item: CollectibleItem) {
    this.repository.update(item);
  }

  deleteItem(id: string) {
    this.repository.delete(id);
  }

  delete(id: string) {
    this.repository.delete(id);
  }

  clear() {
    this.repository.clear();
  }
}
