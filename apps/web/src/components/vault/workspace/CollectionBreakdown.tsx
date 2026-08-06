"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionBreakdown() {
  const { vault } = useKingdom();

  const collections = useMemo(() => {
    const map = new Map<
      string,
      { count: number; value: number }
    >();

    for (const item of vault.getItems()) {
      const current = map.get(item.collectionId) ?? {
        count: 0,
        value: 0,
      };

      current.count += 1;
      current.value += item.estimatedValue;

      map.set(item.collectionId, current);
    }

    return [...map.entries()].sort(
      (a, b) => b[1].value - a[1].value
    );
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Collection Breakdown
      </h3>

      <div className="mt-5 space-y-3">
        {collections.map(([name, data]) => (
          <div
            key={name}
            className="rounded-lg border border-stone-700 bg-stone-800 p-3"
          >
            <div className="flex justify-between">
              <span className="font-medium text-white">
                {name}
              </span>

              <span className="gold-text">
                ${data.value.toLocaleString()}
              </span>
            </div>

            <div className="mt-1 text-sm muted-text">
              {data.count} collectibles
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
