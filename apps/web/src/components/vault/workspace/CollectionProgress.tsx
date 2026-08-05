"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionProgress() {
  const { vault } = useKingdom();

  const progress = useMemo(() => {
    const items = vault.getItems().length;

    return Math.min((items / 100) * 100, 100);
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Kingdom Progress
      </h3>

      <div className="mt-6 h-4 rounded-full bg-stone-800">
        <div
          className="h-4 rounded-full bg-amber-400"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-3 text-sm muted-text">
        {progress.toFixed(0)}% toward the first 100 collectibles
      </div>
    </section>
  );
}
