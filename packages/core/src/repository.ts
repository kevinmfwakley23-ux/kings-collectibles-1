import { CollectibleItem } from "./item";

export interface VaultRepository {
  getAll(): CollectibleItem[];

  getById(
    id: string
  ): CollectibleItem | undefined;

  save(
    item: CollectibleItem
  ): void;

  update(
    item: CollectibleItem
  ): void;

  delete(
    id: string
  ): void;

  clear(): void;
}
