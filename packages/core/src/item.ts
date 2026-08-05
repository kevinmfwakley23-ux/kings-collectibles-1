export interface CollectibleItem {
  id: string;

  collectionId: string;

  title: string;

  category: string;

  manufacturer?: string;

  brand?: string;

  series?: string;

  set?: string;

  subset?: string;

  cardNumber?: string;

  player?: string;

  team?: string;

  year?: number;

  language?: string;

  variation?: string;

  parallel?: string;

  rookie: boolean;

  autograph: boolean;

  memorabilia: boolean;

  gradingCompany?: string;

  grade?: string;

  certificationNumber?: string;

  condition?: string;

  estimatedValue: number;

  purchasePrice?: number;

  purchaseSource?: string;

  acquiredOn?: Date;

  quantity: number;

  storageLocation?: string;

  lastValuation?: Date;

  tags: string[];

  notes?: string;

  images: string[];

  favorite: boolean;
}
