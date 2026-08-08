import type { ApiRequest, ApiResponse } from "../types/http";
import { NotImplementedError } from "../types/errors";

export abstract class BaseController {
  protected sendSuccess<T>(res: ApiResponse, data: T, statusCode = 200, meta?: Record<string, unknown>): void {
    const timestamp = new Date().toISOString();
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: true,
        data,
        ...(meta ? { meta } : {}),
        timestamp,
      })
    );
  }

  protected sendNotImplemented(req: ApiRequest, featureName: string): void {
    throw new NotImplementedError(`${featureName} endpoint is in development and pending domain feature integration.`);
  }
}
