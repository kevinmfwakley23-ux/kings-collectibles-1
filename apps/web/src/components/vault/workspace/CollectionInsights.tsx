"use client";

import { useMemo } from "react";
import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionInsights() {
  const { vault } = useKingdom();

  const insight = useMemo(() => {
    const items = vault.getItems();

    if (items.length === 0) {
      return "Your Kingdom awaits its first treasure.";
    }

    const highest = [...items].sort(
      (a, b) =>
        b.estimatedValue - a.estimatedValue
    )[0];

    return `${highest.title} is currently your most valuable collectible.`;
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Keeper Insight
      </h3>

      <p className="mt-4 leading-7 muted-text">
        {insight}
      </p>
    </section>
  );
}
