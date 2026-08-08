import type {
  CollectibleItem,
  VaultRepository,
} from "@kings/core";

import { BrowserStorageEngine } from "./BrowserStorageEngine";
import { DATABASE_KEYS } from "./constants";

export class InMemoryVaultRepository
  implements VaultRepository
{
  private readonly storage =
    new BrowserStorageEngine();

  private items: CollectibleItem[];

  constructor() {
    const json =
      this.storage.load(
        DATABASE_KEYS.vault
      );

    this.items = json
      ? JSON.parse(json)
      : [];
  }

  private persist() {
    this.storage.save(
      DATABASE_KEYS.vault,
      JSON.stringify(this.items)
    );
  }

  getAll() {
    return this.items;
  }

  getById(id: string) {
    return this.items.find(
      (i) => i.id === id
    );
  }

  save(item: CollectibleItem) {
    this.items.unshift(item);

    this.persist();
  }

  update(item: CollectibleItem) {
    const index =
      this.items.findIndex(
        (i) => i.id === item.id
      );

    if (index >= 0) {
      this.items[index] = item;

      this.persist();
    }
  }

  delete(id: string) {
    const index =
      this.items.findIndex(
        (i) => i.id === id
      );

    if (index >= 0) {
      this.items.splice(index, 1);

      this.persist();
    }
  }

  clear() {
    this.items = [];

    this.persist();
  }
}
