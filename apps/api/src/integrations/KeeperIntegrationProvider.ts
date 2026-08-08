import type { Logger } from "../utils/Logger";
import type { KeeperContextState } from "@kings/keeper";
import { DEFAULT_KEEPER_STATE } from "@kings/keeper";

export interface KeeperRequestContext {
  conversationId?: string;
  roomPersona: string;
  activeRoom?: string;
}

export class KeeperIntegrationProvider {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public getInitialState(): KeeperContextState {
    return DEFAULT_KEEPER_STATE;
  }

  public resolveRoomPersona(roomName?: string): string {
    const personaMap: Record<string, string> = {
      "great-hall": "Host",
      vault: "Royal Curator",
      library: "Royal Scholar",
      observatory: "Royal Watchman",
      "war-room": "Royal Strategist",
      treasury: "Royal Treasurer",
      workshop: "Royal Craftsman",
      marketplace: "Royal Merchant",
      legacy: "Royal Historian",
      chambers: "Royal Advisor",
    };

    if (!roomName) return "Royal Advisor";
    return personaMap[roomName.toLowerCase()] || "Royal Advisor";
  }

  public createRequestContext(roomName?: string, conversationId?: string): KeeperRequestContext {
    const roomPersona = this.resolveRoomPersona(roomName);
    this.logger.debug("Resolved Keeper request context", { roomName, roomPersona, conversationId });
    return {
      conversationId,
      roomPersona,
      activeRoom: roomName,
    };
  }
}
