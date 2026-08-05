import { kingdomStore } from "@/src/lib/kingdom-store";
import { HeaderAction } from "../common/HeaderAction";

export function KingdomHeader() {
  const collector = kingdomStore.collector;

  return (
    <header className="flex h-20 items-center justify-between border-b border-amber-700/20 bg-stone-950/90 px-8 backdrop-blur">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] gold-text">
          The Collector's Kingdom
        </p>

        <h1 className="text-2xl font-bold text-white">
          Great Hall
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <HeaderAction
          icon="🔍"
          label="Search"
        />

        <HeaderAction
          icon="🔔"
          label="Alerts"
        />

        <div className="flex items-center gap-4 border-l border-amber-500/20 pl-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-xl">
            👑
          </div>

          <div>
            <div className="font-semibold text-white">
              {collector.displayName}
            </div>

            <div className="text-sm muted-text">
              {collector.kingdomRank}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
