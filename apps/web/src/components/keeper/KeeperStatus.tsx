"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function KeeperStatus() {
  const { keeper } = useKingdom();

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-stone-900 to-stone-800 p-6">
      <div className="flex items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-4xl">
          🦁
        </div>

        <div className="flex-1">
          <div className="text-xs uppercase tracking-[0.35em] gold-text">
            The Keeper
          </div>

          <div className="mt-2 text-2xl font-semibold text-white">
            Guardian of the Kingdom
          </div>

          <p className="mt-3 muted-text">
            {keeper.message}
          </p>
        </div>
      </div>
    </section>
  );
}
