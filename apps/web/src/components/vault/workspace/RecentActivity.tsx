"use client";

import { StatisticsService } from "@kings/search";
import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function RecentActivity() {
  const {
    vault,
    setSelectedItem,
  } = useKingdom();

  const statistics = useMemo(
    () => new StatisticsService(),
    []
  );

  const items = statistics.recent(
    vault.getItems(),
    10
  );

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Recent Additions
      </h3>

      <div className="mt-4 text-sm muted-text">
        Last {items.length} collectibles
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              setSelectedItem(item)
            }
            className="w-full rounded-lg border border-stone-700 bg-stone-800 p-3 text-left hover:border-amber-400"
          >
            <div className="font-medium text-white">
              {item.title}
            </div>

            <div className="mt-1 text-sm muted-text">
              {item.brand}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
