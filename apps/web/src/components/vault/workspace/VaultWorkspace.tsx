"use client";

import { useMemo } from "react";

import {
  FilterService,
  SearchService,
} from "@kings/search";

import { useKingdom } from "@/src/context/KingdomContext";

import { CollectionsPanel } from "./CollectionsPanel";
import { ItemDetails } from "./ItemDetails";
import { RoyalVaultSearch } from "./RoyalVaultSearch";
import { VaultGrid } from "./VaultGrid";

export function VaultWorkspace() {
  const {
    filter,
    setFilter,
  } = useKingdom();

  const searchService = useMemo(
    () => new SearchService(),
    []
  );

  const filterService = useMemo(
    () => new FilterService(),
    []
  );

  return (
    <section className="grid gap-6 xl:grid-cols-[260px_1fr_340px]">
      <CollectionsPanel />

      <div className="space-y-6">
        <RoyalVaultSearch
          value={filter.search}
          onChange={(search) =>
            setFilter({
              ...filter,
              search,
            })
          }
        />

        <VaultGrid
          searchService={searchService}
          filterService={filterService}
        />
      </div>

      <ItemDetails />
    </section>
  );
}
