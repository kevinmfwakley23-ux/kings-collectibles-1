"use client";

import { AddCollectibleButton } from "../AddCollectibleButton";

type Props = {
  onAdd: () => void;
};

export function RoyalVaultToolbar({
  onAdd,
}: Props) {
  return (
    <section className="flex items-center justify-between rounded-2xl border border-amber-500/20 bg-stone-900/60 p-5">
      <div>
        <h2 className="text-2xl font-semibold gold-text">
          Royal Vault
        </h2>

        <p className="mt-1 text-sm muted-text">
          Every treasure entrusted to the Kingdom.
        </p>
      </div>

      <AddCollectibleButton onClick={onAdd} />
    </section>
  );
}
