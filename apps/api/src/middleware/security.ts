import type { Middleware, ApiRequest, ApiResponse } from "../types/http";
import type { ApiConfig } from "../config/environment";

export function createSecurityMiddleware(config: ApiConfig): Middleware {
  return (req: ApiRequest, res: ApiResponse, next) => {
    // CORS Headers
    res.setHeader("Access-Control-Allow-Origin", config.cors.origin);
    res.setHeader("Access-Control-Allow-Methods", config.cors.methods.join(", "));
    res.setHeader("Access-Control-Allow-Headers", config.cors.allowedHeaders.join(", "));
    if (config.cors.credentials) {
      res.setHeader("Access-Control-Allow-Credentials", "true");
    }

    // Security Headers
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

    if (req.method === "OPTIONS") {
      res.statusCode = 204;
      res.end();
      return;
    }

    next();
  };
}
