"use client";

import { CollectionAnalyticsService } from "@kings/search";
import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function VaultSummaryCard() {
  const { vault } = useKingdom();

  const analytics = useMemo(
    () => new CollectionAnalyticsService(),
    []
  );

  const items = vault.getItems();

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <div className="text-xs uppercase tracking-widest muted-text">
        Royal Vault
      </div>

      <div className="mt-3 text-4xl font-bold gold-text">
        {analytics.totalItems(items)}
      </div>

      <div className="muted-text">
        Collectibles
      </div>

      <div className="mt-6 text-2xl font-bold text-white">
        $
        {analytics
          .totalValue(items)
          .toLocaleString()}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs uppercase muted-text">
            Average
          </div>

          <div className="mt-1 text-lg font-semibold text-white">
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

          <div className="mt-1 text-lg font-semibold gold-text">
            {analytics.favoriteCount(items)}
          </div>
        </div>
      </div>
    </section>
  );
}
