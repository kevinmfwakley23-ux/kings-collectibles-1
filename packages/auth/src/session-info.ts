import { SessionState } from "./session-state";

export interface SessionInfo {
  sessionId: string;
  collectorId: string;
  deviceName: string;
  createdAt: Date;
  lastActivity: Date;
  state: SessionState;
}
