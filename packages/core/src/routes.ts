export const kingdomRoutes = {
  greatHall: "/",
  vault: "/vault",
  library: "/library",
  marketplace: "/marketplace",
  observatory: "/observatory",
  treasury: "/treasury",
  guild: "/guild",
  archives: "/archives",
} as const;

export type KingdomRoute =
  (typeof kingdomRoutes)[keyof typeof kingdomRoutes];
