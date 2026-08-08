import type { Middleware, ApiRequest, ApiResponse } from "../types/http";
import type { KingdomPermission, UserRole } from "@kings/auth";
import { UnauthorizedError, ForbiddenError } from "../types/errors";

export const optionalAuthMiddleware: Middleware = (req: ApiRequest, res: ApiResponse, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    if (token && token.length > 0) {
      req.user = {
        id: "usr_guest",
        email: "guest@collector.kingdom",
        role: "COLLECTOR" as UserRole,
        permissions: ["VIEW_PUBLIC_KINGDOM"] as KingdomPermission[],
      };
    }
  }

  next();
};

export const requireAuth: Middleware = (req: ApiRequest, res: ApiResponse, next) => {
  if (!req.user) {
    return next(new UnauthorizedError("Authentication token is required to access this resource."));
  }
  next();
};

export function requirePermissions(requiredPermissions: KingdomPermission[]): Middleware {
  return (req: ApiRequest, res: ApiResponse, next) => {
    if (!req.user) {
      return next(new UnauthorizedError("Authentication is required."));
    }

    const hasAllPermissions = requiredPermissions.every((perm) => req.user?.permissions.includes(perm));

    if (!hasAllPermissions) {
      return next(
        new ForbiddenError(
          `Insufficient permissions. Required: ${requiredPermissions.join(", ")}`
        )
      );
    }

    next();
  };
}
