"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionStats() {
  const { vault, activeCollection } = useKingdom();

  const stats = useMemo(() => {
    const items = vault
      .getItems()
      .filter(
        (item) =>
          activeCollection === "All" ||
          item.category === activeCollection
      );

    const value = items.reduce(
      (sum, item) => sum + item.estimatedValue,
      0
    );

    return {
      count: items.length,
      value,
    };
  }, [vault, activeCollection]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Collection Statistics
      </h3>

      <div className="mt-1 text-sm muted-text">
        Current Collection
      </div>

      <div className="mt-6 grid grid-cols-2 gap-5">
        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Items
          </div>

          <div className="mt-2 text-3xl font-bold gold-text">
            {stats.count}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Value
          </div>

          <div className="mt-2 text-3xl font-bold gold-text">
            ${stats.value.toLocaleString()}
          </div>
        </div>
      </div>
    </section>
  );
}
