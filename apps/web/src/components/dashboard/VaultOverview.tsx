"use client";

import { KingdomCard } from "../common/KingdomCard";
import { useKingdom } from "@/src/context/KingdomContext";

export function VaultOverview() {
  const { vault } = useKingdom();
  const items = vault.getItems();

  return (
    <KingdomCard
      title="Royal Vault"
      subtitle="Treasures of the Kingdom"
    >
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-amber-500/20 p-4"
          >
            <div className="flex justify-between">
              <strong>{item.title}</strong>

              <span>
                ${item.estimatedValue.toLocaleString()}
              </span>
            </div>

            <div className="mt-2 text-sm muted-text">
              {item.category}
            </div>

            <div className="mt-1 text-xs gold-text">
              {item.manufacturer}
            </div>
          </div>
        ))}
      </div>
    </KingdomCard>
  );
}
