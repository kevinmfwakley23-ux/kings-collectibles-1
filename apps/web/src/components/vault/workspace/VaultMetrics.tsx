"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function VaultMetrics() {
  const { vault } = useKingdom();

  const metrics = useMemo(() => {
    const items = vault.getItems();

    const average =
      items.length === 0
        ? 0
        : items.reduce(
            (sum, i) => sum + i.estimatedValue,
            0
          ) / items.length;

    return {
      average,
    };
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Vault Metrics
      </h3>

      <div className="mt-5">
        <div className="text-sm muted-text">
          Average Item Value
        </div>

        <div className="mt-2 text-2xl font-bold gold-text">
          ${metrics.average.toFixed(0)}
        </div>
      </div>
    </section>
  );
}
