export interface Collector {
  id: string;
  displayName: string;
  title: string;
  kingdomRank: string;
}

export const defaultCollector: Collector = {
  id: "kevin",
  displayName: "Kevin",
  title: "Founder",
  kingdomRank: "Grand Collector",
};
