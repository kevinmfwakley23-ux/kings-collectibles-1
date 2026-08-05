"use client";

import { useMemo } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionTags() {
  const { vault } = useKingdom();

  const tags = useMemo(() => {
    const map = new Map<string, number>();

    vault.getItems().forEach((item) => {
      item.tags.forEach((tag) => {
        map.set(tag, (map.get(tag) ?? 0) + 1);
      });
    });

    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [vault]);

  if (tags.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <h3 className="text-lg font-semibold gold-text">
        Popular Tags
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map(([tag, count]) => (
          <span
            key={tag}
            className="rounded-full border border-amber-500/20 px-3 py-1 text-sm"
          >
            {tag} ({count})
          </span>
        ))}
      </div>
    </section>
  );
}
