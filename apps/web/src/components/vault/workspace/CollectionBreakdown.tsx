"use client";

import { useMemo } from "react";
import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionBreakdown() {
  const { vault } = useKingdom();

  const rows = useMemo(() => {
    const counts = new Map<string, number>();

    for (const item of vault.getItems()) {
      counts.set(
        item.category,
        (counts.get(item.category) ?? 0) + 1
      );
    }

    return [...counts.entries()];
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Collection Breakdown
      </h3>

      <div className="mt-5 space-y-3">
        {rows.map(([name, count]) => (
          <div
            key={name}
            className="flex justify-between"
          >
            <span>{name}</span>

            <span className="gold-text">
              {count}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
