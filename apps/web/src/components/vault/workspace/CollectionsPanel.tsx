"use client";

const collections = [
  {
    id: "pokemon",
    name: "Pokémon",
    count: 1,
  },
  {
    id: "sports",
    name: "Sports",
    count: 0,
  },
  {
    id: "comics",
    name: "Comics",
    count: 0,
  },
  {
    id: "coins",
    name: "Coins",
    count: 0,
  },
];

export function CollectionsPanel() {
  return (
    <aside className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold gold-text">
          Collections
        </h2>

        <p className="mt-2 text-sm muted-text">
          Browse your Kingdom
        </p>
      </div>

      <div className="space-y-3">
        {collections.map((collection) => (
          <button
            key={collection.id}
            className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 transition-all ${
              collection.id === "pokemon"
                ? "border-amber-400 bg-amber-500/10"
                : "border-stone-700 hover:border-amber-500/40"
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
