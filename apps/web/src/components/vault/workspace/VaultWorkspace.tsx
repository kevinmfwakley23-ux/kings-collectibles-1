"use client";

import { CollectionsPanel } from "./CollectionsPanel";
import { ItemDetails } from "./ItemDetails";
import { RoyalVaultSearch } from "./RoyalVaultSearch";
import { VaultGrid } from "./VaultGrid";

export function VaultWorkspace() {
  return (
    <section className="grid gap-6 xl:grid-cols-[260px_1fr_340px]">
      <CollectionsPanel />

      <div className="space-y-6">
        <RoyalVaultSearch />

        <VaultGrid />
      </div>

      <ItemDetails />
    </section>
  );
}
