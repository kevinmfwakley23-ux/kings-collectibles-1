"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function QuickActions() {
  const { selectedItem, setKeeper } = useKingdom();

  const disabled = !selectedItem;

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Quick Actions
      </h3>

      <div className="mt-5 grid gap-3">
        <button
          disabled={disabled}
          onClick={() =>
            setKeeper({
              mood: "watching",
              message: "Editing tools coming soon.",
            })
          }
          className="rounded-xl border border-stone-700 px-4 py-3 text-left transition hover:border-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Edit Collectible
        </button>

        <button
          disabled={disabled}
          onClick={() =>
            setKeeper({
              mood: "watching",
              message: "Image management coming soon.",
            })
          }
          className="rounded-xl border border-stone-700 px-4 py-3 text-left transition hover:border-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Manage Images
        </button>

        <button
          disabled={disabled}
          onClick={() =>
            setKeeper({
              mood: "watching",
              message: "Marketplace integration coming soon.",
            })
          }
          className="rounded-xl border border-stone-700 px-4 py-3 text-left transition hover:border-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          View Market Value
        </button>
      </div>
    </section>
  );
}
