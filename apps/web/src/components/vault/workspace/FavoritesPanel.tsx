"use client";

import { StatisticsService } from "@kings/search";
import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function FavoritesPanel() {
  const { vault } = useKingdom();

  const statistics = useMemo(
    () => new StatisticsService(),
    []
  );

  const items = vault.getItems();

  const favoriteCount =
    statistics.favoriteItems(items);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Favorites
      </h3>

      <div className="mt-4 text-5xl font-bold gold-text">
        {favoriteCount}
      </div>

      <div className="mt-4 text-sm muted-text">
        Favorite collectibles
      </div>
    </section>
  );
}
