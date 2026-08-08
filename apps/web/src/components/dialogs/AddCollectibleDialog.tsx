"use client";

import { useState } from "react";

import { CollectibleFactory } from "@kings/core";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (
    collectible: ReturnType<
      typeof CollectibleFactory.create
    >
  ) => void;
};

export function AddCollectibleDialog({
  open,
  onClose,
  onSave,
}: Props) {
  const [title, setTitle] = useState("");

  const [brand, setBrand] = useState("");

  const closeDialog = () => {
    setTitle("");
    setBrand("");
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl border border-amber-500/20 bg-stone-900 p-8">
        <h2 className="text-3xl font-bold gold-text">
          Add Collectible
        </h2>

        <div className="mt-8 space-y-4">
          <input
            autoFocus
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Title"
            className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3"
          />

          <input
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
            placeholder="Brand"
            className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3"
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={closeDialog}
            className="rounded-xl border border-stone-700 px-5 py-3"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!title.trim()}
            onClick={() => {
              onSave(
                CollectibleFactory.create({
                  title: title.trim(),
                  brand: brand.trim(),
                })
              );

              closeDialog();
            }}
            className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Save Collectible
          </button>
        </div>
      </div>
    </div>
  );
}
