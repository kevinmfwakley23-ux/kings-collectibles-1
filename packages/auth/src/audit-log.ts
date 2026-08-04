import type { SecurityEvent } from "./security-event";

export interface AuditLogProvider {
  record(
    event: SecurityEvent,
  ): Promise<void>;
}
