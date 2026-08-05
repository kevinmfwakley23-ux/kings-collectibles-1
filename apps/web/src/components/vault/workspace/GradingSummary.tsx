"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function GradingSummary() {
  const { vault } = useKingdom();

  const stats = useMemo(() => {
    const items = vault.getItems();

    return {
      graded: items.filter(
        (i) => i.gradingCompany
      ).length,
      raw: items.filter(
        (i) => !i.gradingCompany
      ).length,
    };
  }, [vault]);

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Grading Summary
      </h3>

      <div className="mt-5 space-y-3">
        <div className="flex justify-between">
          <span>Graded</span>
          <span className="gold-text">
            {stats.graded}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Raw</span>
          <span className="gold-text">
            {stats.raw}
          </span>
        </div>
      </div>
    </section>
  );
}
