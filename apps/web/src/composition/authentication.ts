import { AuthenticationApplicationService } from "@/src/application/auth/AuthenticationApplicationService";
import { getIdentityProviderRegistry } from "@/src/infrastructure/auth/provider-registration";

const authentication =
  new AuthenticationApplicationService(
    getIdentityProviderRegistry(),
  );

export function getAuthenticationApplicationService(): AuthenticationApplicationService {
  return authentication;
}
