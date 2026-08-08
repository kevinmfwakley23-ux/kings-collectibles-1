import type { ApiConfig } from "../config/environment";
import type { Logger } from "../utils/Logger";

export interface SupabaseConfigStatus {
  configured: boolean;
  hasUrl: boolean;
  hasAnonKey: boolean;
  hasServiceKey: boolean;
}

export class SupabaseIntegrationProvider {
  private config: ApiConfig;
  private logger: Logger;

  constructor(config: ApiConfig, logger: Logger) {
    this.config = config;
    this.logger = logger;
  }

  public getStatus(): SupabaseConfigStatus {
    const { url, anonKey, serviceRoleKey } = this.config.supabase;
    const hasUrl = Boolean(url);
    const hasAnonKey = Boolean(anonKey);
    const hasServiceKey = Boolean(serviceRoleKey);

    return {
      configured: hasUrl && (hasAnonKey || hasServiceKey),
      hasUrl,
      hasAnonKey,
      hasServiceKey,
    };
  }

  public async checkConnection(): Promise<{ ok: boolean; message: string }> {
    const status = this.getStatus();
    if (!status.configured) {
      return {
        ok: false,
        message: "Supabase integration parameters are not configured in environment.",
      };
    }
    this.logger.info("Supabase integration provider ready for database persistence wiring.");
    return {
      ok: true,
      message: "Supabase integration configured and ready for connection.",
    };
  }
}
