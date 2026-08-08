import { ReactNode } from "react";

import { KingdomLayout } from "@/src/components/kingdom";

import { RoleGuard } from "./RoleGuard";

import type { KingdomPermission } from "@kings/auth";

type AuthenticatedKingdomShellProps = {
  children?: ReactNode;
  allowedRoles?: readonly string[];
  requiredPermissions?: readonly KingdomPermission[];
};

export function AuthenticatedKingdomShell({
  allowedRoles,
  children,
  requiredPermissions,
}: AuthenticatedKingdomShellProps) {
  return (
    <RoleGuard
      allowedRoles={allowedRoles}
      requiredPermissions={requiredPermissions}
    >
      <KingdomLayout>{children}</KingdomLayout>
    </RoleGuard>
  );
}
