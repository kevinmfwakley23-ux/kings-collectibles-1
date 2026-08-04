export interface RecoveryRequest {
  collectorId: string;
  token: string;
  expiresAt: Date;
  completed: boolean;
}
