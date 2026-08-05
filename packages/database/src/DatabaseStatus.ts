export interface DatabaseStatus {
  connected: boolean;

  repository: string;

  storage: string;
}

export const databaseStatus: DatabaseStatus =
  {
    connected: true,

    repository:
      "InMemoryVaultRepository",

    storage: "Browser LocalStorage",
  };
