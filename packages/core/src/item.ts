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

  character?: string;

  franchise?: string;

  year?: number;

  language?: string;

  variation?: string;

  printRun?: string;

  condition?: string;

  gradingCompany?: string;

  grade?: string;

  certificationNumber?: string;

  estimatedValue: number;

  purchasePrice?: number;

  acquiredOn?: Date;

  storageLocation?: string;

  notes?: string;

  tags: string[];

  imageIds: string[];

  rookie: boolean;

  autograph: boolean;

  memorabilia: boolean;

  favorite: boolean;

  createdAt: Date;

  updatedAt: Date;
}
