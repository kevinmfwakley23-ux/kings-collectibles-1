"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectorProfile() {
  const { vault } = useKingdom();

  const profile = useMemo(() => {
    const items = vault.getItems();

    const value = items.reduce(
      (sum, item) => sum + item.estimatedValue,
      0
    );

    return {
      items: items.length,
      value,
      collections: new Set(
        items.map((i) => i.category)
      ).size,
    };
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Kingdom Profile
      </h3>

      <div className="mt-5 space-y-3">
        <div className="flex justify-between">
          <span>Total Collections</span>
          <span className="gold-text">
            {profile.collections}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Total Items</span>
          <span className="gold-text">
            {profile.items}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Collection Worth</span>
          <span className="gold-text">
            ${profile.value.toLocaleString()}
          </span>
        </div>
      </div>
    </section>
  );
}
