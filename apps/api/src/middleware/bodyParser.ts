import type { Middleware, ApiRequest, ApiResponse } from "../types/http";
import { BadRequestError } from "../types/errors";

export const bodyParserMiddleware: Middleware = (req: ApiRequest, res: ApiResponse, next) => {
  if (req.method === "GET" || req.method === "HEAD" || req.method === "DELETE" || req.method === "OPTIONS") {
    req.body = {};
    return next();
  }

  const contentType = req.headers["content-type"] || "";
  if (!contentType.includes("application/json")) {
    req.body = {};
    return next();
  }

  let bodyData = "";
  req.on("data", (chunk) => {
    bodyData += chunk.toString();
    if (bodyData.length > 10 * 1024 * 1024) {
      // 10MB limit
      req.destroy(new BadRequestError("Payload too large. Maximum size is 10MB."));
    }
  });

  req.on("end", () => {
    try {
      req.body = bodyData.length > 0 ? JSON.parse(bodyData) : {};
      next();
    } catch {
      next(new BadRequestError("Invalid JSON payload provided in request body."));
    }
  });

  req.on("error", (err) => {
    next(err);
  });
};
