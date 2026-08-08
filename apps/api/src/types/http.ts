import type { IncomingMessage, ServerResponse } from "node.js:http";
import type { UserRole, KingdomPermission, SessionState } from "@kings/auth";

export interface RequestUser {
  id: string;
  email: string;
  role: UserRole;
  permissions: KingdomPermission[];
}

export interface ApiRequest<Params = Record<string, string>, Query = Record<string, string>, Body = unknown>
  extends IncomingMessage {
  id: string;
  startTime: number;
  params: Params;
  query: Query;
  body: Body;
  path: string;
  user?: RequestUser;
  session?: SessionState;
}

export interface ApiResponse extends ServerResponse {
  json: <T>(statusCode: number, payload: T) => void;
  sendSuccess: <T>(data: T, statusCode?: number, meta?: Record<string, unknown>) => void;
  sendError: (error: Error | string, statusCode?: number, code?: string, details?: unknown) => void;
}

export type Middleware = (req: ApiRequest, res: ApiResponse, next: (err?: unknown) => void) => void | Promise<void>;

export type RouteHandler<Params = Record<string, string>, Query = Record<string, string>, Body = unknown> = (
  req: ApiRequest<Params, Query, Body>,
  res: ApiResponse
) => void | Promise<void>;

export interface HttpSuccessResponse<T> {
  success: true;
  data: T;
  meta?: Record<string, unknown>;
  requestId?: string;
  timestamp: string;
}

export interface HttpErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  requestId?: string;
  timestamp: string;
}

export type HttpResponseFormat<T> = HttpSuccessResponse<T> | HttpErrorResponse;

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

export interface RouteDefinition {
  method: HttpMethod;
  path: string;
  handler: RouteHandler;
  middlewares?: Middleware[];
  description?: string;
  summary?: string;
  tags?: string[];
}
