export interface Collection {
  id: string;
  name: string;
  description?: string;

  createdAt: Date;
  updatedAt: Date;

  itemCount: number;

  estimatedValue: number;

  favorite: boolean;

  archived: boolean;
}
