import type { ApiConfig } from "../config/environment";
import { getApiConfig } from "../config/environment";
import { Logger } from "../utils/Logger";
import { SystemHealthService } from "../services/SystemHealthService";
import { SupabaseIntegrationProvider } from "../integrations/SupabaseIntegrationProvider";
import { KeeperIntegrationProvider } from "../integrations/KeeperIntegrationProvider";
import { OpenAPIProvider } from "../integrations/OpenAPIProvider";

export class ServiceContainer {
  private static instance: ServiceContainer;

  public readonly config: ApiConfig;
  public readonly logger: Logger;
  public readonly healthService: SystemHealthService;
  public readonly supabaseProvider: SupabaseIntegrationProvider;
  public readonly keeperProvider: KeeperIntegrationProvider;
  public readonly openApiProvider: OpenAPIProvider;

  private constructor() {
    this.config = getApiConfig();
    this.logger = new Logger("KINGS-API", this.config.logLevel);
    this.healthService = new SystemHealthService(this.config, this.logger);
    this.supabaseProvider = new SupabaseIntegrationProvider(this.config, this.logger);
    this.keeperProvider = new KeeperIntegrationProvider(this.logger);
    this.openApiProvider = new OpenAPIProvider(this.config);

    this.logger.info("ServiceContainer initialized successfully with core dependency graph.");
  }

  public static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }
}
