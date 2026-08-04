import { AuthenticationError } from "./errors";

export function requireValue(
  value: string,
  field: string,
): void {
  if (value.trim().length === 0) {
    throw new AuthenticationError(
      `${field} is required.`,
    );
  }
}

export function validateEmail(
  email: string,
): void {
  requireValue(email, "Email");

  if (!email.includes("@")) {
    throw new AuthenticationError(
      "Invalid email address.",
    );
  }
}
