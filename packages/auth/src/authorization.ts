import type { KingdomRole } from "./roles";

import { KingdomPermission } from "./permissions";

export function hasPermission(
  role: KingdomRole,
  permission: KingdomPermission,
): boolean {
  return role.permissions.includes(permission);
}
