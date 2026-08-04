import type { AuthenticationResult } from "./types";

export interface AuthenticationProvider {
  readonly name: string;

  authenticate(
    username: string,
    secret: string,
  ): Promise<AuthenticationResult>;
}
