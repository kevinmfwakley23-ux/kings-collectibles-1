import { BaseController } from "./BaseController";
import type { ApiConfig } from "../config/environment";
import type { ApiRequest, ApiResponse } from "../types/http";

export class VersionController extends BaseController {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    super();
    this.config = config;
  }

  public getVersion = (req: ApiRequest, res: ApiResponse): void => {
    const versionPayload = {
      name: "@kings/api",
      version: "0.1.0",
      apiVersion: "v1",
      environment: this.config.env,
      buildTime: new Date().toISOString(),
      governingSpec: "K.I.N.G.S. Construction Documents v1.0",
    };

    this.sendSuccess(res, versionPayload, 200, { requestId: req.id });
  };
}
