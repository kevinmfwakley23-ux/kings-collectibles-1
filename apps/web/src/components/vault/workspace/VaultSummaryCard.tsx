"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function VaultSummaryCard() {
  const { vault } = useKingdom();

  const items = vault.getItems();

  const value = items.reduce(
    (sum, item) =>
      sum + item.estimatedValue,
    0
  );

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <div className="text-xs uppercase tracking-widest muted-text">
        Royal Vault
      </div>

      <div className="mt-3 text-4xl font-bold gold-text">
        {items.length}
      </div>

      <div className="muted-text">
        Collectibles
      </div>

      <div className="mt-6 text-2xl font-bold text-white">
        ${value.toLocaleString()}
      </div>
    </section>
  );
}
