"use client";

import {
  FilterPresets,
  SortOption,
} from "@kings/search";

import { useKingdom } from "@/src/context/KingdomContext";

import { AddCollectibleButton } from "../AddCollectibleButton";

type Props = {
  onAdd: () => void;
};

export function RoyalVaultToolbar({
  onAdd,
}: Props) {
  const {
    filter,
    setFilter,
    sortOption,
    setSortOption,
  } = useKingdom();

  return (
    <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <div>
        <h2 className="text-2xl font-semibold gold-text">
          Royal Vault
        </h2>

        <p className="mt-1 text-sm muted-text">
          Every treasure entrusted to the Kingdom.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <select
          value={sortOption}
          onChange={(e) => {
            const value =
              e.target.value as SortOption;

            setSortOption(value);

            setFilter({
              ...filter,
              sort: value,
            });
          }}
          className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-3 text-white"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="title-asc">Title A–Z</option>
          <option value="title-desc">Title Z–A</option>
          <option value="value-high">Highest Value</option>
          <option value="value-low">Lowest Value</option>
        </select>

        <button
          onClick={() =>
            setFilter(FilterPresets.all())
          }
          className="rounded-xl border border-stone-700 px-4 py-3 hover:border-amber-400"
        >
          All
        </button>

        <button
          onClick={() =>
            setFilter(FilterPresets.favorites())
          }
          className="rounded-xl border border-stone-700 px-4 py-3 hover:border-amber-400"
        >
          Favorites
        </button>

        <button
          onClick={() =>
            setFilter(FilterPresets.graded())
          }
          className="rounded-xl border border-stone-700 px-4 py-3 hover:border-amber-400"
        >
          Graded
        </button>

        <button
          onClick={() =>
            setFilter(FilterPresets.raw())
          }
          className="rounded-xl border border-stone-700 px-4 py-3 hover:border-amber-400"
        >
          Raw
        </button>

        <AddCollectibleButton
          onClick={onAdd}
        />
      </div>
    </section>
  );
}
