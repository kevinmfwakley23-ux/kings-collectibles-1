"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

import { RoyalVaultCard } from "./RoyalVaultCard";
import { RoyalVaultEmpty } from "./RoyalVaultEmpty";

export function VaultGrid() {
  const {
    vault,
    selectedItem,
    setSelectedItem,
    setKeeper,
    activeCollection,
  } = useKingdom();

  const items = useMemo(() => {
    const all = vault.getItems();

    if (activeCollection === "All") {
      return all;
    }

    return all.filter(
      (item) => item.category === activeCollection
    );
  }, [vault, activeCollection]);

  if (items.length === 0) {
    return <RoyalVaultEmpty />;
  }

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold gold-text">
            {activeCollection}
          </h2>

          <p className="mt-1 text-sm muted-text">
            {items.length} collectible{items.length !== 1 ? "s" : ""}
          </p>
        </div>
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
