export interface PriceHistory {
  id: string;

  collectibleId: string;

  value: number;

  source: string;

  currency: string;

  recordedAt: Date;
}
