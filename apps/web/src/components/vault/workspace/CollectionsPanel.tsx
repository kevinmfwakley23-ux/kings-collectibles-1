"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

type CollectionRow = {
  name: string;
  count: number;
};

export function CollectionsPanel() {
  const {
    vault,
    activeCollection,
    setActiveCollection,
    setKeeper,
  } = useKingdom();

  const collections = useMemo<CollectionRow[]>(() => {
    const items = vault.getItems();

    const counts = new Map<string, number>();

    for (const item of items) {
      counts.set(
        item.category,
        (counts.get(item.category) ?? 0) + 1
      );
    }

    return [
      {
        name: "All",
        count: items.length,
      },
      ...Array.from(counts.entries()).map(
        ([name, count]) => ({
          name,
          count,
        })
      ),
    ];
  }, [vault]);

  return (
    <aside className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
      <h2 className="text-xl font-semibold gold-text">
        Collections
      </h2>

      <div className="mt-6 space-y-3">
        {collections.map((collection) => (
          <button
            key={collection.name}
            onClick={() => {
              setActiveCollection(collection.name);

              setKeeper({
                mood: "watching",
                message: `Browsing ${collection.name} collection.`,
              });
            }}
            className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 transition ${
              activeCollection === collection.name
                ? "border-amber-400 bg-amber-500/10"
                : "border-stone-700 hover:border-amber-400"
            }`}
          >
            <span>{collection.name}</span>

            <span className="rounded-md bg-stone-800 px-2 py-1 text-xs">
              {collection.count}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
