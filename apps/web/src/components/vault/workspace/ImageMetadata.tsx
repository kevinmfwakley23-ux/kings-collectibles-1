"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function ImageMetadata() {
  const { selectedItem } = useKingdom();

  if (!selectedItem) {
    return (
      <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
        <h3 className="text-lg font-semibold gold-text">
          Image Metadata
        </h3>

        <div className="mt-5 text-sm muted-text">
          Select a collectible to view image information.
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Image Metadata
      </h3>

      <div className="mt-5 space-y-2 text-sm">
        <div>
          Images: {selectedItem.imageIds?.length ?? 0}
        </div>

        <div>
          Primary Image:{" "}
          {selectedItem.imageIds?.[0] ??
            "None"}
        </div>

        <div>
          Category: {selectedItem.category}
        </div>

        <div>
          Brand: {selectedItem.brand}
        </div>
      </div>
    </section>
  );
}
