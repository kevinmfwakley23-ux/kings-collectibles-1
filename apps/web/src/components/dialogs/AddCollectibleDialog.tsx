"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
};

export function AddCollectibleDialog({
  open,
  onClose,
  onSave,
}: Props) {
  const [title, setTitle] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-amber-500/20 bg-stone-900 p-8 shadow-2xl">
        <h2 className="text-3xl font-bold gold-text">
          Add Collectible
        </h2>

        <p className="mt-2 muted-text">
          Enter a new treasure into the Royal Vault.
        </p>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-8 w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3 outline-none focus:border-amber-400"
          placeholder="Collectible title"
        />

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-stone-700 px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (!title.trim()) return;

              onSave(title);

              setTitle("");
            }}
            className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black"
          >
            Save Collectible
          </button>
        </div>
      </div>
    </div>
  );
}
