export interface TrustedDevice {
  id: string;
  collectorId: string;
  deviceName: string;
  platform: string;
  createdAt: Date;
  lastSeen: Date;
}
