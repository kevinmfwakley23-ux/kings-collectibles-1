import type { ApiConfig } from "../config/environment";
import type { RouteDefinition } from "../types/http";

export interface OpenAPISpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description: string;
  };
  servers: Array<{ url: string; description: string }>;
  paths: Record<string, Record<string, unknown>>;
  components: {
    securitySchemes: Record<string, unknown>;
  };
}

export class OpenAPIProvider {
  private config: ApiConfig;
  private routes: RouteDefinition[] = [];

  constructor(config: ApiConfig) {
    this.config = config;
  }

  public registerRoutes(routes: RouteDefinition[]): void {
    this.routes = routes;
  }

  public generateSpec(): OpenAPISpec {
    const paths: Record<string, Record<string, unknown>> = {};

    for (const route of this.routes) {
      const formattedPath = route.path.replace(/:([a-zA-Z0-9_]+)/g, "{$1}");
      if (!paths[formattedPath]) {
        paths[formattedPath] = {};
      }

      const methodLower = route.method.toLowerCase();
      paths[formattedPath][methodLower] = {
        summary: route.summary || `${route.method} ${route.path}`,
        description: route.description || `Handler for ${route.method} ${route.path}`,
        tags: route.tags || ["Default"],
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    data: { type: "object" },
                    timestamp: { type: "string" },
                  },
                },
              },
            },
          },
          "400": { description: "Bad Request" },
          "401": { description: "Unauthorized" },
          "500": { description: "Internal Server Error" },
        },
      };
    }

    return {
      openapi: "3.0.3",
      info: {
        title: "K.I.N.G.S. Collector's Kingdom API",
        version: "0.1.0",
        description: "Official REST API for K.I.N.G.S. platform domains.",
      },
      servers: [
        {
          url: `http://${this.config.host}:${this.config.port}${this.config.apiPrefix}`,
          description: "Local Development Server",
        },
      ],
      paths,
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    };
  }
}
