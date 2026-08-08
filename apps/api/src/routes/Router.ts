import type { HttpMethod, Middleware, RouteDefinition, ApiRequest, ApiResponse } from "../types/http";
import { NotFoundError } from "../types/errors";

export interface MatchResult {
  route: RouteDefinition;
  params: Record<string, string>;
}

export class Router {
  private routes: RouteDefinition[] = [];
  private globalMiddlewares: Middleware[] = [];

  public use(middleware: Middleware): void {
    this.globalMiddlewares.push(middleware);
  }

  public addRoute(
    method: HttpMethod,
    path: string,
    handler: RouteDefinition["handler"],
    options?: { middlewares?: Middleware[]; summary?: string; description?: string; tags?: string[] }
  ): void {
    this.routes.push({
      method,
      path,
      handler,
      middlewares: options?.middlewares || [],
      summary: options?.summary,
      description: options?.description,
      tags: options?.tags,
    });
  }

  public get(path: string, handler: RouteDefinition["handler"], options?: { middlewares?: Middleware[]; summary?: string; tags?: string[] }): void {
    this.addRoute("GET", path, handler, options);
  }

  public post(path: string, handler: RouteDefinition["handler"], options?: { middlewares?: Middleware[]; summary?: string; tags?: string[] }): void {
    this.addRoute("POST", path, handler, options);
  }

  public put(path: string, handler: RouteDefinition["handler"], options?: { middlewares?: Middleware[]; summary?: string; tags?: string[] }): void {
    this.addRoute("PUT", path, handler, options);
  }

  public delete(path: string, handler: RouteDefinition["handler"], options?: { middlewares?: Middleware[]; summary?: string; tags?: string[] }): void {
    this.addRoute("DELETE", path, handler, options);
  }

  public getRoutes(): RouteDefinition[] {
    return [...this.routes];
  }

  public match(method: HttpMethod, urlPath: string): MatchResult | null {
    const cleanPath = urlPath.split("?")[0] || "/";

    for (const route of this.routes) {
      if (route.method !== method) continue;

      const routeParts = route.path.split("/").filter(Boolean);
      const urlParts = cleanPath.split("/").filter(Boolean);

      if (routeParts.length !== urlParts.length) continue;

      const params: Record<string, string> = {};
      let isMatch = true;

      for (let i = 0; i < routeParts.length; i++) {
        const routePart = routeParts[i];
        const urlPart = urlParts[i];

        if (routePart.startsWith(":")) {
          const paramName = routePart.substring(1);
          params[paramName] = decodeURIComponent(urlPart);
        } else if (routePart !== urlPart) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        return { route, params };
      }
    }

    return null;
  }

  public async handle(req: ApiRequest, res: ApiResponse, errorHandler: (err: unknown, req: ApiRequest, res: ApiResponse) => void): Promise<void> {
    try {
      const matchResult = this.match(req.method as HttpMethod, req.path || req.url || "/");

      if (!matchResult) {
        throw new NotFoundError(`Route ${req.method} ${req.path || req.url} not found.`);
      }

      req.params = matchResult.params;

      const pipeline: Middleware[] = [
        ...this.globalMiddlewares,
        ...(matchResult.route.middlewares || []),
      ];

      let index = 0;
      const next = async (err?: unknown): Promise<void> => {
        if (err) {
          return errorHandler(err, req, res);
        }

        if (index < pipeline.length) {
          const middleware = pipeline[index++];
          try {
            await middleware(req, res, next);
          } catch (mErr) {
            errorHandler(mErr, req, res);
          }
        } else {
          try {
            await matchResult.route.handler(req, res);
          } catch (hErr) {
            errorHandler(hErr, req, res);
          }
        }
      };

      await next();
    } catch (err) {
      errorHandler(err, req, res);
    }
  }
}
