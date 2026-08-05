"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import {
  CollectibleItem,
  VaultService,
} from "@kings/core";

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

  refresh: () => void;
};

const vault = new VaultService();

const KingdomContext =
  createContext<KingdomContextValue | null>(null);

export function KingdomProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [, setVersion] = useState(0);

  const [keeper, setKeeper] =
    useState(defaultKeeperState);

  const [selectedItem, setSelectedItem] =
    useState<CollectibleItem | null>(null);

  const refresh = () =>
    setVersion((v) => v + 1);

  return (
    <KingdomContext.Provider
      value={{
        vault,
        keeper,
        setKeeper,
        selectedItem,
        setSelectedItem,
        refresh,
      }}
    >
      {children}
    </KingdomContext.Provider>
  );
}

export function useKingdom() {
  const context = useContext(KingdomContext);

  if (!context) {
    throw new Error(
      "useKingdom must be used inside KingdomProvider"
    );
  }

  return context;
}
