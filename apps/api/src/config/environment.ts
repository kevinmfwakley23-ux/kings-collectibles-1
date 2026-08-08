export type LogLevel = "debug" | "info" | "warn" | "error";

export interface ApiConfig {
  env: string;
  port: number;
  host: string;
  apiPrefix: string;
  logLevel: LogLevel;
  cors: {
    origin: string;
    methods: string[];
    allowedHeaders: string[];
    credentials: boolean;
  };
  supabase: {
    url?: string;
    anonKey?: string;
    serviceRoleKey?: string;
  };
}

export function getApiConfig(): ApiConfig {
  return {
    env: process.env.NODE_ENV || "development",
    port: parseInt(process.env.PORT || "3001", 10),
    host: process.env.HOST || "0.0.0.0",
    apiPrefix: process.env.API_PREFIX || "/api/v1",
    logLevel: (process.env.LOG_LEVEL as LogLevel) || "info",
    cors: {
      origin: process.env.CORS_ORIGIN || "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Request-ID", "X-Keeper-Context"],
      credentials: true,
    },
    supabase: {
      url: process.env.SUPABASE_URL,
      anonKey: process.env.SUPABASE_ANON_KEY,
      serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
  };
}
