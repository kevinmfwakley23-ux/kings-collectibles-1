"use client";

import { useMemo } from "react";

import { CollectionAnalyticsService } from "@kings/search";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionStats() {
  const {
    vault,
    activeCollection,
  } = useKingdom();

  const analytics = useMemo(
    () => new CollectionAnalyticsService(),
    []
  );

  const items = vault
    .getItems()
    .filter(
      (item) =>
        activeCollection === "All" ||
        item.collectionId ===
          activeCollection
    );

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Collection Statistics
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <div className="text-xs uppercase muted-text">
            Items
          </div>

          <div className="mt-2 text-3xl font-bold gold-text">
            {analytics.totalItems(items)}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase muted-text">
            Favorites
          </div>

          <div className="mt-2 text-3xl font-bold gold-text">
            {analytics.favoriteCount(items)}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase muted-text">
            Total Value
          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            $
            {analytics
              .totalValue(items)
              .toLocaleString()}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase muted-text">
            Average
          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            $
            {analytics
              .averageValue(items)
              .toFixed(0)}
          </div>
        </div>
      </div>
    </section>
  );
}
