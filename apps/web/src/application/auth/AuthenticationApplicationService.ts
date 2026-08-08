import {
  AuthenticationError,
} from "@kings/auth";

import type {
  AuthenticationResult,
  IdentityProviderStatus,
} from "@kings/auth";

import { IdentityProviderRegistry } from "./IdentityProviderRegistry";
import type { AuthenticationCredentials } from "./types";

export class AuthenticationApplicationService {
  constructor(
    private readonly providers: IdentityProviderRegistry,
  ) {}

  providerName(): string {
    return this.providers.resolve().name;
  }

  providerStatus(): IdentityProviderStatus {
    return this.providers.resolve().status;
  }

  async authenticate(
    credentials: AuthenticationCredentials,
  ): Promise<AuthenticationResult> {
    const result = await this.providers.resolve().authenticate(
      credentials.email,
      credentials.password,
    );

    if (!result.authenticated || !result.collector) {
      throw new AuthenticationError(
        result.message ?? "Authentication is not available.",
      );
    }

    return result;
  }
}
