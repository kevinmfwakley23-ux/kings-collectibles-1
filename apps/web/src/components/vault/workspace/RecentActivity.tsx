"use client";

import { useKingdom } from "@/src/context/KingdomContext";

export function RecentActivity() {
  const {
    vault,
    setSelectedItem,
  } = useKingdom();

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Recent Additions
      </h3>

      <div className="mt-5 space-y-3">
        {vault.getItems().slice(0, 5).map((item) => (
          <button
            key={item.id}
            onClick={() =>
              setSelectedItem(item)
            }
            className="w-full rounded-lg border border-stone-700 bg-stone-800 p-3 text-left hover:border-amber-400"
          >
            <div>{item.title}</div>

            <div className="text-sm muted-text">
              {item.brand}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
