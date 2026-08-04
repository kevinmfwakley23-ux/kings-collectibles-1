import { KingdomPermission } from "./permissions";

export interface KingdomRole {
  id: string;

  name: string;

  permissions: readonly KingdomPermission[];
}

export const CollectorRole: KingdomRole = {
  id: "collector",

  name: "Collector",

  permissions: [
    KingdomPermission.ViewKingdom,
    KingdomPermission.ManageProfile,
    KingdomPermission.ManageVault,
    KingdomPermission.Marketplace,
  ],
};

export const MerchantRole: KingdomRole = {
  id: "merchant",

  name: "Merchant",

  permissions: [
    ...CollectorRole.permissions,

    KingdomPermission.Merchant,
  ],
};

export const AdministratorRole: KingdomRole = {
  id: "administrator",

  name: "Administrator",

  permissions: Object.values(KingdomPermission),
};
