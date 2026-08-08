import type { ApiRequest, ApiResponse } from "../types/http";
import { ApiError } from "../types/errors";
import type { Logger } from "../utils/Logger";

export function createErrorHandlerMiddleware(logger: Logger) {
  return (err: unknown, req: ApiRequest, res: ApiResponse) => {
    const timestamp = new Date().toISOString();
    const requestId = req.id;

    if (err instanceof ApiError) {
      logger.warn(`API Error [${err.code}]: ${err.message}`, {
        requestId,
        statusCode: err.statusCode,
        code: err.code,
        details: err.details,
      });

      res.statusCode = err.statusCode;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          success: false,
          error: {
            code: err.code,
            message: err.message,
            ...(err.details ? { details: err.details } : {}),
          },
          requestId,
          timestamp,
        })
      );
      return;
    }

    const message = err instanceof Error ? err.message : "An unexpected server error occurred.";
    const stack = err instanceof Error ? err.stack : undefined;

    logger.error(`Unhandled Exception: ${message}`, {
      requestId,
      error: err,
      stack,
    });

    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: false,
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred on the server.",
        },
        requestId,
        timestamp,
      })
    );
  };
}
