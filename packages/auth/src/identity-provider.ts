import type { AuthenticationProvider } from "./auth-provider";

export type IdentityProviderStatus =
  | "configured"
  | "not-configured";

export interface IdentityProvider
  extends AuthenticationProvider
{
  readonly status: IdentityProviderStatus;
}
