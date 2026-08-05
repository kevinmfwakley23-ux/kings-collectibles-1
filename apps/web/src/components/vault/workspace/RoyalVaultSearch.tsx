"use client";

import { useState } from "react";

import { useKingdom } from "@/src/context/KingdomContext";

export function RoyalVaultSearch() {
  const { setKeeper } = useKingdom();

  const [value, setValue] = useState("");

  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-4">
      <input
        type="text"
        value={value}
        placeholder="Search the Royal Vault..."
        onChange={(event) => {
          const text = event.target.value;

          setValue(text);

          setKeeper({
            mood: "watching",
            message:
              text.length === 0
                ? "Standing watch over the Royal Vault."
                : `Searching for "${text}".`,
          });
        }}
        className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3 outline-none transition focus:border-amber-400"
      />
    </section>
  );
}
