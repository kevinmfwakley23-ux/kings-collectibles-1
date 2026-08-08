"use client";

import { ReactNode } from "react";

import { useAuthentication } from "@/src/context/AuthenticationContext";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const {
    authenticated,
    providerName,
    providerStatus,
    ready,
  } = useAuthentication();

  if (!ready || !authenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-950 text-stone-100">
        <section className="kingdom-panel max-w-md rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-semibold gold-text">
            Authentication Not Configured
          </h1>
          <p className="mt-3 muted-text">
            The {providerName} identity provider is {providerStatus}.
          </p>
        </section>
      </main>
    );
  }

  return <>{children}</>;
}
