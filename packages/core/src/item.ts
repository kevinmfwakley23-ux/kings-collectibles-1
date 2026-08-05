export interface CollectibleItem {
  id: string;

  collectionId: string;

  title: string;

  category: string;

  manufacturer?: string;

  brand?: string;

  series?: string;

  year?: number;

  condition?: string;

  gradingCompany?: string;

  grade?: string;

  estimatedValue: number;

  purchasePrice?: number;

  acquiredOn?: Date;

  notes?: string;

  images: string[];

  favorite: boolean;
}
