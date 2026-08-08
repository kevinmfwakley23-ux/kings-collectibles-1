import { IdentityProviderRegistry } from "@/src/application/auth/IdentityProviderRegistry";

import { StubIdentityProvider } from "./StubIdentityProvider";

const registry = new IdentityProviderRegistry();

registry.register(new StubIdentityProvider());

export function getIdentityProviderRegistry(): IdentityProviderRegistry {
  return registry;
}
