"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function ImageMetadata() {
  const { selectedItem } = useKingdom();

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Image Metadata
      </h3>

      <div className="mt-5 space-y-2 text-sm">
        <div>
          Images: {selectedItem?.images.length ?? 0}
        </div>

        <div>
          Primary Image: Coming Soon
        </div>

        <div>
          AI Status: Pending
        </div>
      </div>
    </section>
  );
}
