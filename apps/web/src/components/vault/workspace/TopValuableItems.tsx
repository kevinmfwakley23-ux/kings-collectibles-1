"use client";

import { StatisticsService } from "@kings/search";
import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function TopValuableItems() {
  const {
    vault,
    setSelectedItem,
  } = useKingdom();

  const statistics = useMemo(
    () => new StatisticsService(),
    []
  );

  const items =
    statistics.topValuable(
      vault.getItems(),
      10
    );

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Top 10 Valuable
      </h3>

      <div className="mt-5 space-y-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() =>
              setSelectedItem(item)
            }
            className="flex w-full items-center justify-between rounded-lg border border-stone-700 bg-stone-800 p-3 hover:border-amber-400"
          >
            <span>
              #{index + 1} {item.title}
            </span>

            <span className="gold-text">
              $
              {item.estimatedValue.toLocaleString()}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
