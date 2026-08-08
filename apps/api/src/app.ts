import { createServer } from "node.js:http";
import type { Server } from "node.js:http";
import { ServiceContainer } from "./container/ServiceContainer";
import { Router } from "./routes/Router";
import { registerV1Routes } from "./routes/apiV1";
import { requestContextMiddleware } from "./middleware/requestContext";
import { createSecurityMiddleware } from "./middleware/security";
import { createRequestLoggerMiddleware } from "./middleware/requestLogger";
import { bodyParserMiddleware } from "./middleware/bodyParser";
import { optionalAuthMiddleware } from "./middleware/authMiddleware";
import { createErrorHandlerMiddleware } from "./middleware/errorHandler";
import type { ApiRequest, ApiResponse } from "./types/http";

export class ApiApplication {
  public readonly container: ServiceContainer;
  public readonly router: Router;
  public readonly server: Server;

  constructor() {
    this.container = ServiceContainer.getInstance();
    this.router = new Router();

    this.configureMiddlewares();
    this.configureRoutes();

    const errorHandler = createErrorHandlerMiddleware(this.container.logger);

    this.server = createServer((nodeReq, nodeRes) => {
      const req = nodeReq as ApiRequest;
      const res = nodeRes as ApiResponse;

      const urlParts = (req.url || "/").split("?");
      req.path = urlParts[0] || "/";
      req.query = {};

      if (urlParts[1]) {
        const queryParams = new URLSearchParams(urlParts[1]);
        queryParams.forEach((value, key) => {
          req.query[key] = value;
        });
      }

      res.json = <T>(statusCode: number, payload: T): void => {
        res.statusCode = statusCode;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(payload));
      };

      res.sendSuccess = <T>(data: T, statusCode = 200, meta?: Record<string, unknown>): void => {
        res.json(statusCode, {
          success: true,
          data,
          ...(meta ? { meta } : {}),
          requestId: req.id,
          timestamp: new Date().toISOString(),
        });
      };

      res.sendError = (error: Error | string, statusCode = 500, code = "INTERNAL_ERROR", details?: unknown): void => {
        const message = typeof error === "string" ? error : error.message;
        res.json(statusCode, {
          success: false,
          error: {
            code,
            message,
            ...(details ? { details } : {}),
          },
          requestId: req.id,
          timestamp: new Date().toISOString(),
        });
      };

      this.router.handle(req, res, errorHandler);
    });
  }

  private configureMiddlewares(): void {
    this.router.use(requestContextMiddleware);
    this.router.use(createSecurityMiddleware(this.container.config));
    this.router.use(createRequestLoggerMiddleware(this.container.logger));
    this.router.use(bodyParserMiddleware);
    this.router.use(optionalAuthMiddleware);
  }

  private configureRoutes(): void {
    registerV1Routes(this.router, this.container);
  }
}
