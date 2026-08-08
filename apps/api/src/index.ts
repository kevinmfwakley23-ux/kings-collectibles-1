import { startServer } from "./server";

export * from "./types/http";
export * from "./types/errors";
export * from "./config/environment";
export * from "./utils/Logger";
export * from "./container/ServiceContainer";
export * from "./services/SystemHealthService";
export * from "./integrations/SupabaseIntegrationProvider";
export * from "./integrations/KeeperIntegrationProvider";
export * from "./integrations/OpenAPIProvider";
export * from "./app";
export * from "./server";

if (require.main === module) {
  startServer();
}
