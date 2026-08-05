import {
  VaultService,
  defaultCollector,
} from "@kings/core";

class KingdomStore {
  readonly vault = new VaultService();

  readonly collector = defaultCollector;
}

export const kingdomStore = new KingdomStore();
