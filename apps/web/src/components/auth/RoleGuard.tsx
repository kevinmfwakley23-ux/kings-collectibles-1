"use client";

import { ReactNode } from "react";

import { useAuthentication } from "@/src/context/AuthenticationContext";

import type { KingdomPermission } from "@kings/auth";

type RoleGuardProps = {
  children: ReactNode;
  allowedRoles?: readonly string[];
  requiredPermissions?: readonly KingdomPermission[];
};

export function RoleGuard({
  allowedRoles,
  children,
  requiredPermissions,
}: RoleGuardProps) {
  const { hasPermission, hasRole } =
    useAuthentication();

  const hasRequiredRole =
    !allowedRoles ||
    allowedRoles.length === 0 ||
    allowedRoles.some(hasRole);
  const hasRequiredPermissions =
    !requiredPermissions ||
    requiredPermissions.every(hasPermission);

  if (hasRequiredRole && hasRequiredPermissions) {
    return <>{children}</>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 p-8 text-stone-100">
      <section className="kingdom-panel max-w-md rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-semibold gold-text">
          Access Restricted
        </h1>
        <p className="mt-3 muted-text">
          Your Kingdom role does not permit access to this room.
        </p>
      </section>
    </main>
  );
}
