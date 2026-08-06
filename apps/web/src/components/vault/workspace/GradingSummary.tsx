"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function GradingSummary() {
  const { vault } = useKingdom();

  const summary = useMemo(() => {
    const graded = vault
      .getItems()
      .filter((i) => !!i.grade).length;

    const raw =
      vault.getItems().length - graded;

    return { graded, raw };
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Grading Summary
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-5">
        <div>
          <div className="text-xs uppercase muted-text">
            Graded
          </div>

          <div className="mt-2 text-3xl font-bold gold-text">
            {summary.graded}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase muted-text">
            Raw
          </div>

          <div className="mt-2 text-3xl font-bold text-white">
            {summary.raw}
          </div>
        </div>
      </div>
    </section>
  );
}
