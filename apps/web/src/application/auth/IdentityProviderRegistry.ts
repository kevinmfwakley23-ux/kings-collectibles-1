import type { IdentityProvider } from "@kings/auth";

export class IdentityProviderRegistry {
  private provider: IdentityProvider | null = null;

  register(provider: IdentityProvider): void {
    this.provider = provider;
  }

  resolve(): IdentityProvider {
    if (!this.provider) {
      throw new Error(
        "No IdentityProvider has been registered.",
      );
    }

    return this.provider;
  }
}
