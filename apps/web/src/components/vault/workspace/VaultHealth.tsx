"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function VaultHealth() {
  const { vault } = useKingdom();

  const items = vault.getItems().length;

  const status =
    items >= 100
      ? "Legendary"
      : items >= 25
      ? "Growing"
      : "Beginning";

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Kingdom Status
      </h3>

      <div className="mt-6 text-3xl font-bold gold-text">
        {status}
      </div>

      <p className="mt-3 muted-text">
        Continue expanding your Royal Vault.
      </p>
    </section>
  );
}
