"use client";

import { CollectionBreakdown } from "./CollectionBreakdown";
import { CollectionInsights } from "./CollectionInsights";
import { CollectionProgress } from "./CollectionProgress";
import { CollectionStats } from "./CollectionStats";
import { CollectionTags } from "./CollectionTags";
import { CollectionValueChart } from "./CollectionValueChart";
import { CollectionsPanel } from "./CollectionsPanel";
import { CollectorProfile } from "./CollectorProfile";
import { FavoritesPanel } from "./FavoritesPanel";
import { GradingSummary } from "./GradingSummary";
import { ItemDetails } from "./ItemDetails";
import { KeeperAdvice } from "./KeeperAdvice";
import { RecentActivity } from "./RecentActivity";
import { RoyalVaultSearch } from "./RoyalVaultSearch";
import { TopValuableItems } from "./TopValuableItems";
import { VaultGrid } from "./VaultGrid";
import { VaultHealth } from "./VaultHealth";
import { VaultMetrics } from "./VaultMetrics";
import { VaultSummaryCard } from "./VaultSummaryCard";

export function VaultWorkspace() {
  return (
    <section className="grid gap-6 xl:grid-cols-[280px_1fr_360px]">
      <section className="space-y-6">
        <VaultSummaryCard />
        <CollectorProfile />
        <CollectionProgress />
        <CollectionsPanel />
        <CollectionBreakdown />
        <CollectionTags />
        <VaultHealth />
      </section>

      <section className="space-y-6">
        <CollectionStats />
        <CollectionValueChart />
        <RoyalVaultSearch />
        <VaultGrid />
      </section>

      <section className="space-y-6">
        <ItemDetails />
        <KeeperAdvice />
        <GradingSummary />
        <VaultMetrics />
        <FavoritesPanel />
        <TopValuableItems />
        <RecentActivity />
        <CollectionInsights />
      </section>
    </section>
  );
}
