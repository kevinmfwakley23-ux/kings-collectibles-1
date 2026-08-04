export interface CollectorIdentity {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
}

export interface AuthenticationResult {
  authenticated: boolean;
  collector?: CollectorIdentity;
  message?: string;
}
