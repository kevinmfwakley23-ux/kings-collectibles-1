"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { getAuthenticationApplicationService } from "@/src/composition/authentication";
import type { AuthenticationCredentials } from "@/src/application/auth/types";
import type {
  CollectorIdentity,
  IdentityProviderStatus,
  KingdomPermission,
  KingdomRole,
} from "@kings/auth";

type AuthenticationContextValue = {
  ready: boolean;
  authenticated: boolean;
  providerName: string;
  providerStatus: IdentityProviderStatus;
  collector: CollectorIdentity | null;
  role: KingdomRole | null;
  signIn: (
    credentials: AuthenticationCredentials,
  ) => Promise<void>;
  signOut: () => void;
  hasPermission: (
    permission: KingdomPermission,
  ) => boolean;
  hasRole: (roleId: string) => boolean;
};

const AuthenticationContext =
  createContext<AuthenticationContextValue | null>(
    null,
  );

export function AuthenticationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const service = useMemo(
    getAuthenticationApplicationService,
    [],
  );

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, [service]);

  const signIn = useCallback(
    async (credentials: AuthenticationCredentials) => {
      await service.authenticate(credentials);
    },
    [service],
  );

  const signOut = useCallback(() => {
    return;
  }, []);

  const value = useMemo<AuthenticationContextValue>(
    () => ({
      ready,
      authenticated: false,
      providerName: service.providerName(),
      providerStatus: service.providerStatus(),
      collector: null,
      role: null,
      signIn,
      signOut,
      hasPermission: () => false,
      hasRole: () => false,
    }),
    [ready, service, signIn, signOut],
  );

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthentication must be used inside AuthenticationProvider",
    );
  }

  return context;
}

export function usePermission(
  permission: KingdomPermission,
): boolean {
  return useAuthentication().hasPermission(permission);
}

export function useRole(roleId: string): boolean {
  return useAuthentication().hasRole(roleId);
}
