import { CollectionRepository } from "@kings/core";
import { KingdomCard } from "../common/KingdomCard";

const repository = new CollectionRepository();

export function CollectionsOverview() {
  const collections = repository.getAll();

  return (
    <KingdomCard
      title="Collections"
      subtitle="Kingdom Inventory"
    >
      <div className="space-y-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="rounded-lg border border-amber-500/20 p-4"
          >
            <div className="flex justify-between">
              <strong>{collection.name}</strong>

              <span>{collection.itemCount} items</span>
            </div>

            <div className="mt-2 text-sm muted-text">
              {collection.description}
            </div>

            <div className="mt-2 gold-text">
              ${collection.estimatedValue.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </KingdomCard>
  );
}
