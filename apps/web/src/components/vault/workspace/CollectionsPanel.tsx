"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionsPanel() {
  const {
    vault,
    activeCollection,
    setActiveCollection,
  } = useKingdom();

  const collections = useMemo(() => {
    const items = vault.getItems();

    const map = new Map<
      string,
      number
    >();

    for (const item of items) {
      const id =
        item.collectionId || "default";

      map.set(
        id,
        (map.get(id) ?? 0) + 1
      );
    }

    return [
      {
        id: "All",
        label: "All Collectibles",
        count: items.length,
      },
      ...Array.from(map.entries()).map(
        ([id, count]) => ({
          id,
          label: id,
          count,
        })
      ),
    ];
  }, [vault, activeCollection]);

  return (
    <aside className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h2 className="text-lg font-semibold gold-text">
        Collections
      </h2>

      <div className="mt-5 space-y-2">
        {collections.map(
          (collection) => (
            <button
              key={collection.id}
              onClick={() =>
                setActiveCollection(
                  collection.id
                )
              }
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition ${
                activeCollection ===
                collection.id
                  ? "bg-amber-500/20 border border-amber-400"
                  : "border border-transparent hover:border-amber-500/30 hover:bg-stone-800"
              }`}
            >
              <span>
                {collection.label}
              </span>

              <span className="rounded-lg bg-stone-800 px-2 py-1 text-xs">
                {collection.count}
              </span>
            </button>
          )
        )}
      </div>
    </aside>
  );
}
