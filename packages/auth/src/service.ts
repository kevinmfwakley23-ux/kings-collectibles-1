import { AuthenticationSession } from "./session";
import { createCollector } from "./user";
import type { AuthenticationResult } from "./types";

export class AuthenticationService {
  private readonly session = new AuthenticationSession();

  public signIn(
    id: string,
    email: string,
    displayName: string,
  ): AuthenticationResult {
    const collector = createCollector(
      id,
      email,
      displayName,
    );

    return this.session.signIn(collector);
  }

  public signOut(): AuthenticationResult {
    return this.session.signOut();
  }

  public currentCollector() {
    return this.session.currentCollector();
  }

  public authenticated(): boolean {
    return this.session.isAuthenticated();
  }
}
