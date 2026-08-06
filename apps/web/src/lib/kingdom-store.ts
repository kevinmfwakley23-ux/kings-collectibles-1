import { database } from "@kings/database";

import {
  defaultCollector,
  VaultService,
} from "@kings/core";

class KingdomStore {
  readonly vault = new VaultService(
    database.vault
  );

  readonly collector =
    defaultCollector;
}

export const kingdomStore =
  new KingdomStore();
