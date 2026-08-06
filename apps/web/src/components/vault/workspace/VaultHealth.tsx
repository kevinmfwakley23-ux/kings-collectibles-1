"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function VaultHealth() {
  const { vault } = useKingdom();

  const items = vault.getItems();

  const score =
    items.length === 0
      ? 0
      : Math.min(
          100,
          Math.round(
            (items.filter(
              (i) => i.favorite
            ).length /
              items.length) *
              100 +
              50
          )
        );

  return (
    <section className="rounded-2xl border border-emerald-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold text-emerald-400">
        Vault Health
      </h3>

      <div className="mt-6 text-5xl font-bold text-white">
        {score}%
      </div>

      <div className="mt-2 muted-text">
        Collection completeness score
      </div>
    </section>
  );
}
