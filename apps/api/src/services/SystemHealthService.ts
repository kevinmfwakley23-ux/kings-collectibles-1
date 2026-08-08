import type { ApiConfig } from "../config/environment";
import type { Logger } from "../utils/Logger";

export interface SystemHealthStatus {
  status: "ok" | "degraded" | "error";
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  version: string;
  memory: {
    rssMb: number;
    heapTotalMb: number;
    heapUsedMb: number;
  };
  checks: {
    system: "healthy" | "unhealthy";
    database: "configured" | "unconfigured" | "healthy" | "unhealthy";
    keeper: "ready" | "uninitialized";
  };
}

export class SystemHealthService {
  private startTime: number;
  private config: ApiConfig;
  private logger: Logger;

  constructor(config: ApiConfig, logger: Logger) {
    this.startTime = Date.now();
    this.config = config;
    this.logger = logger;
  }

  public getHealth(): SystemHealthStatus {
    const memory = process.memoryUsage();
    const uptime = Math.floor((Date.now() - this.startTime) / 1000);

    const hasSupabase = Boolean(this.config.supabase.url && this.config.supabase.anonKey);

    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptimeSeconds: uptime,
      environment: this.config.env,
      version: "0.1.0",
      memory: {
        rssMb: Math.round((memory.rss / 1024 / 1024) * 100) / 100,
        heapTotalMb: Math.round((memory.heapTotal / 1024 / 1024) * 100) / 100,
        heapUsedMb: Math.round((memory.heapUsed / 1024 / 1024) * 100) / 100,
      },
      checks: {
        system: "healthy",
        database: hasSupabase ? "configured" : "unconfigured",
        keeper: "ready",
      },
    };
  }
}
