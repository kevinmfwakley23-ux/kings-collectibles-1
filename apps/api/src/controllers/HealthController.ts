import { BaseController } from "./BaseController";
import type { SystemHealthService } from "../services/SystemHealthService";
import type { ApiRequest, ApiResponse } from "../types/http";

export class HealthController extends BaseController {
  private healthService: SystemHealthService;

  constructor(healthService: SystemHealthService) {
    super();
    this.healthService = healthService;
  }

  public getHealth = (req: ApiRequest, res: ApiResponse): void => {
    const health = this.healthService.getHealth();
    this.sendSuccess(res, health, 200, { requestId: req.id });
  };
}
