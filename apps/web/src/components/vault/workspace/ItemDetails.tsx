"use client";
import { ImageActions } from "./ImageActions";
import { ImageGallery } from "./ImageGallery";
import { ImageMetadata } from "./ImageMetadata";
import { ImageRecognition } from "./ImageRecognition";
import { QuickActions } from "./QuickActions";
import { useKingdom } from "@/src/context/KingdomContext";

function Field({
  label,
  value,
}: {
  label: string;
  value: string | number | undefined;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest muted-text">
        {label}
      </div>

      <div className="mt-1 text-white">
        {value || "—"}
      </div>
    </div>
  );
}

export function ItemDetails() {
  const { selectedItem, activeCollection } = useKingdom();

  if (!selectedItem) {
    return (
      <aside className="space-y-6">
        <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
          <div className="text-xs uppercase tracking-[0.35em] gold-text">
            {activeCollection}
          </div>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Treasure Details
          </h2>

          <div className="mt-8 flex h-80 items-center justify-center rounded-xl border border-dashed border-amber-500/20">
            <div className="text-center">
              <div className="text-lg font-semibold text-white">
                Nothing Selected
              </div>

              <p className="mt-2 muted-text">
                Select a collectible to inspect it.
              </p>
            </div>
          </div>
        </section>
<ImageGallery />

<ImageActions />

<ImageMetadata />

<ImageRecognition />
        <QuickActions />
      </aside>
    );
  }

  return (
    <aside className="space-y-6">
      <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
        <div className="text-xs uppercase tracking-[0.35em] gold-text">
          {activeCollection}
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          {selectedItem.title}
        </h2>

        <div className="mt-6 aspect-square rounded-xl border border-amber-500/20 bg-stone-800 flex items-center justify-center">
          Image Placeholder
        </div>

        <div className="mt-8 grid gap-5">
          <Field label="Brand" value={selectedItem.brand} />
          <Field label="Series" value={selectedItem.series} />
          <Field label="Set" value={selectedItem.set} />
          <Field label="Card Number" value={selectedItem.cardNumber} />
          <Field label="Player" value={selectedItem.player} />
          <Field label="Year" value={selectedItem.year} />
          <Field label="Grade" value={selectedItem.grade} />
          <Field
            label="Grading Company"
            value={selectedItem.gradingCompany}
          />
          <Field
            label="Certification"
            value={selectedItem.certificationNumber}
          />
          <Field
            label="Purchase Price"
            value={
              selectedItem.purchasePrice
                ? `$${selectedItem.purchasePrice.toLocaleString()}`
                : undefined
            }
          />
          <Field
            label="Estimated Value"
            value={`$${selectedItem.estimatedValue.toLocaleString()}`}
          />
          <Field
            label="Storage"
            value={selectedItem.storageLocation}
          />
        </div>
      </section>

      <QuickActions />
    </aside>
  );
}
