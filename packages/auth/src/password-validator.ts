import { AuthenticationError } from "./errors";
import { KingdomPasswordPolicy } from "./password-policy";

export function validatePassword(password: string): void {
  const policy = KingdomPasswordPolicy;

  if (password.length < policy.minimumLength) {
    throw new AuthenticationError(
      `Password must contain at least ${policy.minimumLength} characters.`,
    );
  }

  if (policy.requireUppercase && !/[A-Z]/.test(password)) {
    throw new AuthenticationError(
      "Password must contain an uppercase letter.",
    );
  }

  if (policy.requireLowercase && !/[a-z]/.test(password)) {
    throw new AuthenticationError(
      "Password must contain a lowercase letter.",
    );
  }

  if (policy.requireNumber && !/[0-9]/.test(password)) {
    throw new AuthenticationError(
      "Password must contain a number.",
    );
  }

  if (policy.requireSymbol && !/[^A-Za-z0-9]/.test(password)) {
    throw new AuthenticationError(
      "Password must contain a symbol.",
    );
  }
}
