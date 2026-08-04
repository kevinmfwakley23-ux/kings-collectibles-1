import type {
  AuthenticationResult,
  CollectorIdentity,
} from "./types";

export class AuthenticationSession {
  private collector: CollectorIdentity | null = null;

  public signIn(
    collector: CollectorIdentity,
  ): AuthenticationResult {
    this.collector = collector;

    return {
      authenticated: true,
      collector,
    };
  }

  public signOut(): AuthenticationResult {
    this.collector = null;

    return {
      authenticated: false,
    };
  }

  public currentCollector(): CollectorIdentity | null {
    return this.collector;
  }

  public isAuthenticated(): boolean {
    return this.collector !== null;
  }
}
