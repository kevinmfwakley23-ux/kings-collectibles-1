export interface SecurityEvent {
  id: string;

  collectorId: string;

  action: string;

  occurredAt: Date;

  ipAddress?: string;

  device?: string;
}
