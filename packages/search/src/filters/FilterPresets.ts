import {
  defaultVaultFilter,
  VaultFilter,
} from "./VaultFilter";

export class FilterPresets {
  static all(): VaultFilter {
    return {
      ...defaultVaultFilter,
    };
  }

  static favorites(): VaultFilter {
    return {
      ...defaultVaultFilter,
      favoritesOnly: true,
    };
  }

  static graded(): VaultFilter {
    return {
      ...defaultVaultFilter,
      grades: [
        "PSA 10",
        "PSA 9",
        "BGS 10",
        "BGS 9.5",
        "SGC 10",
      ],
    };
  }

  static raw(): VaultFilter {
    return {
      ...defaultVaultFilter,
      grades: [],
    };
  }

  static newest(): VaultFilter {
    return {
      ...defaultVaultFilter,
      sort: "newest",
    };
  }

  static oldest(): VaultFilter {
    return {
      ...defaultVaultFilter,
      sort: "oldest",
    };
  }

  static alphabetical(): VaultFilter {
    return {
      ...defaultVaultFilter,
      sort: "name",
    };
  }

  static highestValue(): VaultFilter {
    return {
      ...defaultVaultFilter,
      sort: "value-high",
    };
  }

  static lowestValue(): VaultFilter {
    return {
      ...defaultVaultFilter,
      sort: "value-low",
    };
  }
}
