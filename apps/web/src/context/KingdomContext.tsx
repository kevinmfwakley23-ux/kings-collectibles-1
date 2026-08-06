"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

import { database } from "@kings/database";

import {
  CollectibleItem,
  VaultService,
} from "@kings/core";

import {
  SortOption,
  VaultFilter,
  defaultVaultFilter,
} from "@kings/search";

import {
  defaultKeeperState,
  KeeperState,
} from "@kings/keeper";

type KingdomContextValue = {
  vault: VaultService;

  keeper: KeeperState;

  setKeeper: (keeper: KeeperState) => void;

  selectedItem: CollectibleItem | null;

  setSelectedItem: (
    item: CollectibleItem | null
  ) => void;

  activeCollection: string;

  setActiveCollection: (
    collection: string
  ) => void;

  sortOption: SortOption;

  setSortOption: (
    option: SortOption
  ) => void;

  filter: VaultFilter;

  setFilter: (
    filter: VaultFilter
  ) => void;

  refresh: () => void;
};

const KingdomContext =
  createContext<KingdomContextValue | null>(
    null
  );

export function KingdomProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [version, setVersion] =
    useState(0);

  const repository = useMemo(
    () => database.vault,
    []
  );

  const vault = useMemo(
    () => new VaultService(repository),
    [repository]
  );

  const [keeper, setKeeper] =
    useState(defaultKeeperState);

  const [selectedItem, setSelectedItem] =
    useState<CollectibleItem | null>(
      null
    );

  const [
    activeCollection,
    setActiveCollection,
  ] = useState("All");

  const [sortOption, setSortOption] =
    useState<SortOption>("newest");

  const [filter, setFilter] =
    useState<VaultFilter>(
      defaultVaultFilter
    );

  const refresh = () =>
    setVersion((v) => v + 1);

  void version;

  return (
    <KingdomContext.Provider
      value={{
        vault,
        keeper,
        setKeeper,
        selectedItem,
        setSelectedItem,
        activeCollection,
        setActiveCollection,
        sortOption,
        setSortOption,
        filter,
        setFilter,
        refresh,
      }}
    >
      {children}
    </KingdomContext.Provider>
  );
}

export function useKingdom() {
  const context =
    useContext(KingdomContext);

  if (!context) {
    throw new Error(
      "useKingdom must be used inside KingdomProvider"
    );
  }

  return context;
}
