"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionProgress() {
  const { vault } = useKingdom();

  const items = vault.getItems();

  const target = 1000;

  const percent = Math.min(
    (items.length / target) * 100,
    100
  );

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Collection Goal
      </h3>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-stone-800">
        <div
          className="h-full bg-amber-500 transition-all"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm muted-text">
        <span>
          {items.length} / {target} collectibles
        </span>

        <span>{percent.toFixed(0)}%</span>
      </div>
    </section>
  );
}
