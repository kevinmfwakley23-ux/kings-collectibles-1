"use client";

import { CollectionAnalyticsService } from "@kings/search";
import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function VaultMetrics() {
  const { vault } = useKingdom();

  const analytics = useMemo(
    () => new CollectionAnalyticsService(),
    []
  );

  const items = vault.getItems();

  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="rounded-xl border border-amber-500/20 bg-stone-900/60 p-4">
        <div className="text-xs uppercase muted-text">
          Items
        </div>

        <div className="mt-2 text-3xl font-bold gold-text">
          {analytics.totalItems(items)}
        </div>
      </div>

      <div className="rounded-xl border border-amber-500/20 bg-stone-900/60 p-4">
        <div className="text-xs uppercase muted-text">
          Favorites
        </div>

        <div className="mt-2 text-3xl font-bold gold-text">
          {analytics.favoriteCount(items)}
        </div>
      </div>
    </section>
  );
}
