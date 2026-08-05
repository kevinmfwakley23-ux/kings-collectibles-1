"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionValueChart() {
  const { vault, activeCollection } = useKingdom();

  const stats = useMemo(() => {
    const items = vault
      .getItems()
      .filter(
        (item) =>
          activeCollection === "All" ||
          item.category === activeCollection
      );

    const highest =
      items.length === 0
        ? 1
        : Math.max(
            ...items.map((i) => i.estimatedValue)
          );

    return items.map((item) => ({
      title: item.title,
      width:
        (item.estimatedValue / highest) * 100,
      value: item.estimatedValue,
    }));
  }, [vault, activeCollection]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
      </h3>
Value Distribution
      <div className="mt-5 space-y-4">
        {stats.map((row) => (
          <div key={row.title}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{row.title}</span>

              <span className="gold-text">
                ${row.value.toLocaleString()}
              </span>
            </div>

            <div className="h-3 rounded-full bg-stone-800">
              <div
                className="h-3 rounded-full bg-amber-400"
                style={{
                  width: `${row.width}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
