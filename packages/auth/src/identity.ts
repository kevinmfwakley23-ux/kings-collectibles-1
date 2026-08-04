import { AccountType } from "./account-types";

export interface KingdomIdentity {
  id: string;
  accountType: AccountType;
  email: string;
  displayName: string;
  createdAt: Date;
}
