export interface KingdomRoom {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export const kingdomRooms: KingdomRoom[] = [
  {
    id: "great-hall",
    title: "Great Hall",
    icon: "🏰",
    description: "The center of the Kingdom.",
  },
  {
    id: "vault",
    title: "Royal Vault",
    icon: "🏛️",
    description: "Your collectible collections.",
  },
  {
    id: "library",
    title: "Library",
    icon: "📚",
    description: "Research and knowledge.",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    icon: "⚖️",
    description: "Buy, sell and trade.",
  },
  {
    id: "observatory",
    title: "Observatory",
    icon: "🔭",
    description: "Market intelligence.",
  },
  {
    id: "treasury",
    title: "Treasury",
    icon: "💰",
    description: "Kingdom finances.",
  },
  {
    id: "guild",
    title: "Guild Hall",
    icon: "🛡️",
    description: "Community and teams.",
  },
  {
    id: "archives",
    title: "Archives",
    icon: "📜",
    description: "History and records.",
  },
];
