import { InMemoryVaultRepository } from "./InMemoryVaultRepository";

export class Database {
  readonly vault =
    new InMemoryVaultRepository();
}

export const database =
  new Database();
