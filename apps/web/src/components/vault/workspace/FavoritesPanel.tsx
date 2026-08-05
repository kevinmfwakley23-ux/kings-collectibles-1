"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function FavoritesPanel() {
  const { vault } = useKingdom();

  const favorites = useMemo(
    () =>
      vault
        .getItems()
        .filter((i) => i.favorite),
    [vault]
  );

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Favorites
      </h3>

      <div className="mt-5 space-y-2">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-stone-700 bg-stone-800 p-3"
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
}
