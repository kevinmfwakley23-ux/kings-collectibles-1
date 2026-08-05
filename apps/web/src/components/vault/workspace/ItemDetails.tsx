"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function ItemDetails() {
  const { selectedItem } = useKingdom();

  if (!selectedItem) {
    return (
      <aside className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
        <h2 className="text-xl font-semibold gold-text">
          Treasure Details
        </h2>

        <div className="mt-8 flex aspect-square items-center justify-center rounded-xl border border-dashed border-amber-500/20">
          <div className="text-center">
            <p className="text-lg text-white">
              No Treasure Selected
            </p>

            <p className="mt-2 muted-text">
              Select a collectible from the Royal Vault.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
      <h2 className="text-xl font-semibold gold-text">
        Treasure Details
      </h2>

      <div className="mt-6 aspect-square rounded-xl border border-amber-500/20 bg-stone-800 flex items-center justify-center">
        <span className="muted-text">
          Image Placeholder
        </span>
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Title
          </div>

          <div className="mt-1 text-xl font-semibold text-white">
            {selectedItem.title}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Category
          </div>

          <div className="mt-1">
            {selectedItem.category}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Manufacturer
          </div>

          <div className="mt-1">
            {selectedItem.manufacturer}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Estimated Value
          </div>

          <div className="mt-1 text-2xl font-semibold gold-text">
            ${selectedItem.estimatedValue.toLocaleString()}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Year
          </div>

          <div className="mt-1">
            {selectedItem.year}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest muted-text">
            Notes
          </div>

          <div className="mt-1 rounded-lg border border-amber-500/20 bg-stone-800 p-3">
            {selectedItem.notes || "No notes available."}
          </div>
        </div>
      </div>
    </aside>
  );
}
