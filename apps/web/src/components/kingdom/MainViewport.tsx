import { KeeperPanel } from "./KeeperPanel";
import { KeeperStatus } from "../keeper/KeeperStatus";
import { CollectionSummary } from "../dashboard/CollectionSummary";
import { VaultOverview } from "../dashboard/VaultOverview";

export function MainViewport() {
  return (
    <main className="flex-1 overflow-auto bg-stone-950 p-10">
      <KeeperPanel />

      <div className="mt-6">
        <KeeperStatus />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <CollectionSummary />
        <VaultOverview />
      </div>
    </main>
  );
}
