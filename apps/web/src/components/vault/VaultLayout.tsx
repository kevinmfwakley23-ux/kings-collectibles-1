"use client";

import { useState } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

import { AddCollectibleDialog } from "../dialogs/AddCollectibleDialog";
import { PageHeader } from "../common/PageHeader";
import { KeeperStatus } from "../keeper/KeeperStatus";

import { RoyalVaultToolbar } from "./workspace/RoyalVaultToolbar";
import { VaultWorkspace } from "./workspace/VaultWorkspace";

export function VaultLayout() {
  const [dialogOpen, setDialogOpen] =
    useState(false);

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
        onSave={(item) => {
          vault.addItem({
            id: crypto.randomUUID(),

            collectionId: "default",

            category: "Trading Card",

            rookie: false,

            autograph: false,

            memorabilia: false,

            quantity: 1,

            tags: [],

            images: [],

            favorite: false,

            language: "English",

            variation: "",

            parallel: "",

            certificationNumber: "",

            storageLocation: "",

            purchaseSource: "",

            acquiredOn: new Date(),

            lastValuation: new Date(),

            condition: "",

            grade: "",

            gradingCompany: "",

            ...item,
          });

          refresh();

          setKeeper({
            mood: "celebrating",
            message: `"${item.title}" added to the Royal Vault.`,
          });

          setDialogOpen(false);
        }}
      />
    </main>
  );
}
