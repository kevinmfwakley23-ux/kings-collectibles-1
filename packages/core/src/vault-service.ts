import { CollectibleItem } from "./item";
import { VaultSummary } from "./vault";

export class VaultService {
  private readonly items: CollectibleItem[] = [
    {
      id: "demo-001",
      collectionId: "pokemon",
      title: "Charizard Base Set",
      category: "Trading Card",
      manufacturer: "Wizards of the Coast",
      brand: "Pokémon",
      series: "Base Set",
      year: 1999,
      condition: "Near Mint",
      gradingCompany: "",
      grade: "",
      estimatedValue: 5000,
      purchasePrice: 0,
      acquiredOn: new Date(),
      notes: "Kingdom demonstration collectible.",
      images: [],
      favorite: true,
    },
  ];

  getItems(): CollectibleItem[] {
    return this.items;
  }

  addItem(title: string): void {
    this.items.push({
      id: crypto.randomUUID(),
      collectionId: "pokemon",
      title,
      category: "Uncategorized",
      manufacturer: "Unknown",
      brand: "",
      series: "",
      year: new Date().getFullYear(),
      condition: "",
      gradingCompany: "",
      grade: "",
      estimatedValue: 0,
      purchasePrice: 0,
      acquiredOn: new Date(),
      notes: "",
      images: [],
      favorite: false,
    });
  }

  getSummary(): VaultSummary {
    const totalEstimatedValue = this.items.reduce(
      (sum, item) => sum + item.estimatedValue,
      0
    );

    return {
      totalCollections: new Set(
        this.items.map((item) => item.collectionId)
      ).size,
      totalItems: this.items.length,
      favoriteItems: this.items.filter((item) => item.favorite).length,
      totalEstimatedValue,
    };
  }
}
