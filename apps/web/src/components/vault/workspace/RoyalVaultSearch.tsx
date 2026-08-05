"use client";

export function RoyalVaultSearch() {
  return (
    <section className="rounded-2xl border border-amber-500/20 bg-stone-900/60 p-4">
      <input
        type="text"
        placeholder="Search the Royal Vault..."
        className="w-full rounded-xl border border-stone-700 bg-stone-800 px-4 py-3 outline-none transition focus:border-amber-400"
      />
    </section>
  );
}
