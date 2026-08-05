"use client";

import { useState } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

import { AddCollectibleDialog } from "../dialogs/AddCollectibleDialog";
import { PageHeader } from "../common/PageHeader";
import { KeeperStatus } from "../keeper/KeeperStatus";

import { RoyalVaultToolbar } from "./workspace/RoyalVaultToolbar";
import { VaultWorkspace } from "./workspace/VaultWorkspace";

export function VaultLayout() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const {
    vault,
    refresh,
    setKeeper,
  } = useKingdom();

  return (
    <main className="flex-1 overflow-auto bg-stone-950 p-10">
      <PageHeader
        title="Royal Vault"
        subtitle="Every treasure in your Kingdom lives here."
      />

      <div className="mt-8">
        <KeeperStatus />
      </div>

      <div className="mt-8">
        <RoyalVaultToolbar
          onAdd={() => setDialogOpen(true)}
        />
      </div>

      <div className="mt-8">
        <VaultWorkspace />
      </div>

      <AddCollectibleDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={(title) => {
          vault.addItem(title);

          setKeeper({
            mood: "celebrating",
            message: `"${title}" has been added to the Royal Vault.`,
          });

          refresh();

          setDialogOpen(false);
        }}
      />
    </main>
  );
}
