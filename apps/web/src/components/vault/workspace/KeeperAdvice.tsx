"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function KeeperAdvice() {
  const { keeper } = useKingdom();

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Keeper Advice
      </h3>

      <p className="mt-5 leading-7 muted-text">
        {keeper.message}
      </p>
    </section>
  );
}
