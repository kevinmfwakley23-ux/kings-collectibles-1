import type { StorageEngine } from "./StorageEngine";

export class BrowserStorageEngine
  implements StorageEngine
{
  load(key: string) {
    if (typeof window === "undefined") {
      return null;
    }

    return localStorage.getItem(key);
  }

  save(
    key: string,
    value: string
  ) {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(key, value);
  }

  remove(key: string) {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.removeItem(key);
  }

  clear() {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.clear();
  }
}
