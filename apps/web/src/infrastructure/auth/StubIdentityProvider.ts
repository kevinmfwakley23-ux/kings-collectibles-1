import type {
  AuthenticationResult,
  IdentityProvider,
} from "@kings/auth";

export class StubIdentityProvider
  implements IdentityProvider
{
  readonly name = "stub";
  readonly status = "not-configured" as const;

  async authenticate(): Promise<AuthenticationResult> {
    return {
      authenticated: false,
      message: "Not Configured",
    };
  }
}
