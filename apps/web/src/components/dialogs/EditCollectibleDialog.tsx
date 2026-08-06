"use client";

import { useEffect, useState } from "react";

import { CollectibleItem } from "@kings/core";

type Props = {
  open: boolean;
  item: CollectibleItem | null;
  onCancel: () => void;
  onSave: (item: CollectibleItem) => void;
};

export function EditCollectibleDialog({
  open,
  item,
  onCancel,
  onSave,
}: Props) {
  const [title, setTitle] = useState("");

  const [brand, setBrand] = useState("");

  useEffect(() => {
    if (!item) return;

    setTitle(item.title);

    setBrand(item.brand ?? "");
  }, [item]);

  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl border border-amber-500/20 bg-stone-900 p-8">
        <h2 className="text-3xl font-bold gold-text">
          Edit Collectible
        </h2>

        <div className="mt-8 space-y-4">
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3"
          />

          <input
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
            className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3"
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl border border-stone-700 px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={() =>
              onSave({
                ...item,
                title,
                brand,
              })
            }
            className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
