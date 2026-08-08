import type { Middleware, ApiRequest, ApiResponse } from "../types/http";
import type { Logger } from "../utils/Logger";

export function createRequestLoggerMiddleware(logger: Logger): Middleware {
  return (req: ApiRequest, res: ApiResponse, next) => {
    res.on("finish", () => {
      const durationMs = Date.now() - (req.startTime || Date.now());
      logger.info(`${req.method} ${req.url || req.path} ${res.statusCode} ${durationMs}ms`, {
        requestId: req.id,
        method: req.method,
        path: req.url || req.path,
        statusCode: res.statusCode,
        durationMs,
        userAgent: req.headers["user-agent"],
      });
    });

    next();
  };
}
