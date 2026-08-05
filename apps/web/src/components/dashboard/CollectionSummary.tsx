"use client";

import { KingdomCard } from "../common/KingdomCard";
import { useKingdom } from "@/src/context/KingdomContext";

export function CollectionSummary() {
  const { vault } = useKingdom();
  const summary = vault.getSummary();

  return (
    <KingdomCard
      title="Collection"
      subtitle="Royal Vault Summary"
    >
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Total Items</span>
          <strong>{summary.totalItems}</strong>
        </div>

        <div className="flex justify-between">
          <span>Collections</span>
          <strong>{summary.totalCollections}</strong>
        </div>

        <div className="flex justify-between">
          <span>Favorites</span>
          <strong>{summary.favoriteItems}</strong>
        </div>

        <div className="flex justify-between border-t border-amber-500/20 pt-4">
          <span>Estimated Value</span>
          <strong>
            ${summary.totalEstimatedValue.toLocaleString()}
          </strong>
        </div>
      </div>
    </KingdomCard>
  );
}
