export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly details?: unknown;

  constructor(statusCode: number, code: string, message: string, details?: unknown) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request", details?: unknown) {
    super(400, "BAD_REQUEST", message, details);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message = "Unauthorized", details?: unknown) {
    super(401, "UNAUTHORIZED", message, details);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = "Forbidden", details?: unknown) {
    super(403, "FORBIDDEN", message, details);
  }
}

export class NotFoundError extends ApiError {
  constructor(message = "Resource Not Found", details?: unknown) {
    super(404, "NOT_FOUND", message, details);
  }
}

export class MethodNotAllowedError extends ApiError {
  constructor(message = "Method Not Allowed", details?: unknown) {
    super(405, "METHOD_NOT_ALLOWED", message, details);
  }
}

export class ConflictError extends ApiError {
  constructor(message = "Conflict", details?: unknown) {
    super(409, "CONFLICT", message, details);
  }
}

export class InternalServerError extends ApiError {
  constructor(message = "Internal Server Error", details?: unknown) {
    super(500, "INTERNAL_SERVER_ERROR", message, details);
  }
}

export class NotImplementedError extends ApiError {
  constructor(message = "Endpoint or feature not implemented yet", details?: unknown) {
    super(501, "NOT_IMPLEMENTED", message, details);
  }
}
