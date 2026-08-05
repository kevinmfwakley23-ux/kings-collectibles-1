"use client";

import { useMemo } from "react";
import { useKingdom } from "@/src/context/KingdomContext";

export function TopValuableItems() {
  const { vault, setSelectedItem } = useKingdom();

  const items = useMemo(
    () =>
      [...vault.getItems()]
        .sort(
          (a, b) =>
            b.estimatedValue - a.estimatedValue
        )
        .slice(0, 5),
    [vault]
  );

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Most Valuable Treasures
      </h3>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="flex w-full items-center justify-between rounded-lg border border-stone-700 bg-stone-800 p-3 text-left hover:border-amber-400"
          >
            <span>{item.title}</span>

            <span className="gold-text">
              ${item.estimatedValue.toLocaleString()}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
