"use client";

import { CollectibleItem } from "@kings/core";

type Props = {
  item: CollectibleItem;
  selected: boolean;
  onSelect: () => void;
};

export function RoyalVaultCard({
  item,
  selected,
  onSelect,
}: Props) {
  return (
    <button
      onClick={onSelect}
      className={`rounded-xl border p-4 text-left transition-all duration-200 ${
        selected
          ? "border-amber-400 bg-amber-500/10 ring-2 ring-amber-400/30"
          : "border-amber-500/20 bg-stone-800 hover:border-amber-400"
      }`}
    >
      <div className="aspect-square rounded-lg bg-stone-900 mb-4 flex items-center justify-center">
        <span className="text-sm muted-text">
          Image
        </span>
      </div>

      <h3 className="font-semibold text-white">
        {item.title}
      </h3>

      <p className="mt-2 text-sm muted-text">
        {item.category}
      </p>

      <div className="mt-4 flex justify-between">
        <span className="gold-text">
          ${item.estimatedValue.toLocaleString()}
        </span>

        {selected && (
          <span className="text-xs uppercase tracking-widest text-amber-300">
            Selected
          </span>
        )}
      </div>
    </button>
  );
}
