import type { CollectorIdentity } from "./types";

export function createCollector(
  id: string,
  email: string,
  displayName: string,
): CollectorIdentity {
  return {
    id,
    email,
    displayName,
    createdAt: new Date(),
  };
}
