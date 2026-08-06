"use client";

import { CollectionAnalyticsService } from "@kings/search";
import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionInsights() {
  const { vault } = useKingdom();

  const analytics = useMemo(
    () => new CollectionAnalyticsService(),
    []
  );

  const items = vault.getItems();

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Collection Insights
      </h3>

      <div className="mt-6 space-y-5">
        <div>
          <div className="text-xs uppercase muted-text">
            Total Value
          </div>

          <div className="mt-1 text-2xl font-bold text-white">
            $
            {analytics
              .totalValue(items)
              .toLocaleString()}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase muted-text">
            Average Item
          </div>

          <div className="mt-1 text-xl font-semibold gold-text">
            $
            {analytics
              .averageValue(items)
              .toFixed(0)}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase muted-text">
            Favorites
          </div>

          <div className="mt-1 text-xl font-semibold text-white">
            {analytics.favoriteCount(items)}
          </div>
        </div>
      </div>
    </section>
  );
}
