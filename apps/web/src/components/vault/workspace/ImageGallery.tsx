"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function ImageGallery() {
  const { selectedItem } = useKingdom();

  if (!selectedItem) {
    return (
      <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
        <h3 className="text-lg font-semibold gold-text">
          Image Gallery
        </h3>

        <div className="mt-5 flex aspect-video items-center justify-center rounded-xl border border-dashed border-stone-700">
          <span className="muted-text">
            Select a collectible
          </span>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Image Gallery
      </h3>

      <div className="mt-5 grid grid-cols-2 gap-4">
        {[0, 1, 2, 3].map((slot) => (
          <div
            key={slot}
            className="aspect-square rounded-xl border border-stone-700 bg-stone-800 flex items-center justify-center"
          >
            <span className="text-xs muted-text">
              Image {slot + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
