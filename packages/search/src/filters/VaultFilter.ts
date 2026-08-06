export type SortOption =
  | "newest"
  | "oldest"
  | "name"
  | "value-high"
  | "value-low";

export interface VaultFilter {
  search: string;

  favoritesOnly: boolean;

  collectionId?: string;

  tags: string[];

  grades: string[];

  sort: SortOption;
}

export const defaultVaultFilter: VaultFilter = {
  search: "",
  favoritesOnly: false,
  collectionId: undefined,
  tags: [],
  grades: [],
  sort: "newest",
};

export const DefaultVaultFilter =
  defaultVaultFilter;
