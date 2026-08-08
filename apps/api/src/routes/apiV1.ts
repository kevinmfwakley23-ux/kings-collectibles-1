import type { Router } from "./Router";
import type { ServiceContainer } from "../container/ServiceContainer";
import { HealthController } from "../controllers/HealthController";
import { VersionController } from "../controllers/VersionController";
import { NotImplementedError } from "../types/errors";
import type { ApiRequest, ApiResponse } from "../types/http";

export function registerV1Routes(router: Router, container: ServiceContainer): void {
  const healthController = new HealthController(container.healthService);
  const versionController = new VersionController(container.config);

  const notImplementedHandler = (featureName: string) => {
    return (req: ApiRequest, res: ApiResponse) => {
      throw new NotImplementedError(`The ${featureName} endpoint is part of the K.I.N.G.S. API foundation. Business implementation is pending feature sprint.`);
    };
  };

  // --- SYSTEM ENDPOINTS ---
  router.get("/health", healthController.getHealth, { summary: "System Health Check", tags: ["System"] });
  router.get("/version", versionController.getVersion, { summary: "API Version Information", tags: ["System"] });

  router.get("/api/v1/health", healthController.getHealth, { summary: "System Health Check (v1)", tags: ["System"] });
  router.get("/api/v1/version", versionController.getVersion, { summary: "API Version Information (v1)", tags: ["System"] });

  router.get(
    "/api/v1/docs",
    (req, res) => {
      const spec = container.openApiProvider.generateSpec();
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(spec, null, 2));
    },
    { summary: "OpenAPI v3 Specification", tags: ["System"] }
  );

  // --- PRIMARY DOMAIN SERVICES (API_ARCHITECTURE.md) ---

  // 1. Authentication Service
  router.post("/api/v1/auth/login", notImplementedHandler("Authentication Login"), { summary: "Authenticate Collector", tags: ["Authentication"] });
  router.post("/api/v1/auth/logout", notImplementedHandler("Authentication Logout"), { summary: "Terminate Collector Session", tags: ["Authentication"] });
  router.get("/api/v1/auth/session", notImplementedHandler("Session State"), { summary: "Retrieve Active Session", tags: ["Authentication"] });

  // 2. Collector Service
  router.get("/api/v1/collector/profile", notImplementedHandler("Collector Profile"), { summary: "Get Collector Profile", tags: ["Collector"] });
  router.put("/api/v1/collector/profile", notImplementedHandler("Update Collector Profile"), { summary: "Update Collector Profile", tags: ["Collector"] });

  // 3. Keeper Service
  router.get("/api/v1/keeper/context", notImplementedHandler("Keeper Context"), { summary: "Get Keeper Persona Context", tags: ["Keeper"] });
  router.post("/api/v1/keeper/chat", notImplementedHandler("Keeper Conversation"), { summary: "Interact with Keeper", tags: ["Keeper"] });

  // 4. Search Service
  router.get("/api/v1/search", notImplementedHandler("Universal Search"), { summary: "Execute Universal Search", tags: ["Search"] });

  // 5. Notifications Service
  router.get("/api/v1/notifications", notImplementedHandler("Notifications List"), { summary: "Get Notifications", tags: ["Notifications"] });

  // 6. Vault Service
  router.get("/api/v1/vault/items", notImplementedHandler("Vault Items List"), { summary: "List Collectibles in Vault", tags: ["Vault"] });
  router.post("/api/v1/vault/items", notImplementedHandler("Add Collectible Item"), { summary: "Add Item to Vault", tags: ["Vault"] });
  router.get("/api/v1/vault/items/:id", notImplementedHandler("Vault Item Details"), { summary: "Get Vault Item by ID", tags: ["Vault"] });

  // 7. Marketplace Service
  router.get("/api/v1/marketplace/listings", notImplementedHandler("Marketplace Listings"), { summary: "List Marketplace Items", tags: ["Marketplace"] });

  // 8. Treasury Service
  router.get("/api/v1/treasury/summary", notImplementedHandler("Treasury Summary"), { summary: "Get Treasury Portfolio Valuation", tags: ["Treasury"] });

  // 9. Library Service
  router.get("/api/v1/library/articles", notImplementedHandler("Library Knowledge Articles"), { summary: "List Knowledge Articles", tags: ["Library"] });

  // 10. Legacy Service
  router.get("/api/v1/legacy/records", notImplementedHandler("Hall of Legacy Records"), { summary: "Get Legacy Records", tags: ["Legacy"] });

  // 11. Vision Service
  router.post("/api/v1/vision/analyze", notImplementedHandler("Vision Image Recognition"), { summary: "Analyze Collectible Image", tags: ["Vision"] });

  // 12. Memory Service
  router.get("/api/v1/memory/history", notImplementedHandler("Collector Memory History"), { summary: "Get Memory Audit Trail", tags: ["Memory"] });

  // 13. Projects Service
  router.get("/api/v1/projects", notImplementedHandler("Artisan Projects"), { summary: "List Workshop Projects", tags: ["Projects"] });

  // 14. Administration Service
  router.get("/api/v1/admin/status", notImplementedHandler("Admin Status"), { summary: "System Administration Status", tags: ["Administration"] });

  // Register routes in OpenAPI provider
  container.openApiProvider.registerRoutes(router.getRoutes());
}
