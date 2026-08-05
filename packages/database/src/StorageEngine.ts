export interface StorageEngine {
  load(key: string): string | null;

  save(
    key: string,
    value: string
  ): void;

  remove(key: string): void;

  clear(): void;
}
