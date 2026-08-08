import { randomUUID } from "node:crypto";
import type { Middleware, ApiRequest, ApiResponse } from "../types/http";

export const requestContextMiddleware: Middleware = (req: ApiRequest, res: ApiResponse, next) => {
  req.startTime = Date.now();

  const incomingId = req.headers["x-request-id"];
  const requestId = typeof incomingId === "string" && incomingId.length > 0 ? incomingId : randomUUID();

  req.id = requestId;
  res.setHeader("X-Request-ID", requestId);

  next();
};
