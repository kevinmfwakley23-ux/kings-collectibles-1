"use client";

import { ReactNode } from "react";

import { ProtectedRoute } from "./ProtectedRoute";

type AuthenticationRouteGateProps = {
  children: ReactNode;
};

export function AuthenticationRouteGate({
  children,
}: AuthenticationRouteGateProps) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
