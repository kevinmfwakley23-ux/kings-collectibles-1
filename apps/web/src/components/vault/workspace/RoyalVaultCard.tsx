"use client";

import { CollectibleItem } from "@kings/core";

import { CollectibleBadges } from "./CollectibleBadges";

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
      className={`rounded-xl border p-4 text-left transition ${
        selected
          ? "border-amber-400 bg-amber-500/10"
          : "border-amber-500/20 bg-stone-800 hover:border-amber-400"
      }`}
    >
      <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-stone-900">
        IMAGE
      </div>

      <h3 className="font-semibold text-white">
        {item.title}
      </h3>

      <div className="mt-2 text-sm muted-text">
        {item.brand}
      </div>

      <div className="text-sm muted-text">
        {item.set}
      </div>

      <CollectibleBadges
        rookie={item.rookie}
        autograph={item.autograph}
        memorabilia={item.memorabilia}
        favorite={item.favorite}
      />

      <div className="mt-5 flex justify-between">
        <span className="gold-text">
          ${item.estimatedValue.toLocaleString()}
        </span>

        <span className="rounded-md bg-stone-900 px-2 py-1 text-xs">
          {item.grade || "RAW"}
        </span>
      </div>
    </button>
  );
}
