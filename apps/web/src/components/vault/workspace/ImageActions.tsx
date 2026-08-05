"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function ImageActions() {
  const { selectedItem, setKeeper } = useKingdom();

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Image Actions
      </h3>

      <div className="mt-5 grid gap-3">
        <button
          disabled={!selectedItem}
          onClick={() =>
            setKeeper({
              mood: "watching",
              message: "Image upload coming soon.",
            })
          }
          className="rounded-xl border border-stone-700 p-3 text-left disabled:opacity-50"
        >
          Upload Images
        </button>

        <button
          disabled={!selectedItem}
          onClick={() =>
            setKeeper({
              mood: "watching",
              message: "AI scan coming soon.",
            })
          }
          className="rounded-xl border border-stone-700 p-3 text-left disabled:opacity-50"
        >
          AI Scan Images
        </button>
      </div>
    </section>
  );
}
