"use client";

import { useKingdom } from "@/src/context/KingdomContext";

import { RoyalVaultCard } from "./RoyalVaultCard";
import { RoyalVaultEmpty } from "./RoyalVaultEmpty";

export function VaultGrid() {
  const {
    vault,
    selectedItem,
    setSelectedItem,
    setKeeper,
  } = useKingdom();

  const items = vault.getItems();

  if (items.length === 0) {
    return <RoyalVaultEmpty />;
  }

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold gold-text">
          Royal Vault
        </h2>

        <span className="rounded-lg border border-amber-500/20 px-3 py-1 text-sm muted-text">
          {items.length} Collectibles
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <RoyalVaultCard
            key={item.id}
            item={item}
            selected={selectedItem?.id === item.id}
            onSelect={() => {
              setSelectedItem(item);

              setKeeper({
                mood: "watching",
                message: `Inspecting "${item.title}".`,
              });
            }}
          />
        ))}
      </div>
    </section>
  );
}
