import { AuthenticatedKingdomShell } from "@/src/components/auth/AuthenticatedKingdomShell";
import { VaultLayout } from "@/src/components/vault/VaultLayout";

export default function VaultPage() {
  return (
    <AuthenticatedKingdomShell>
      <VaultLayout />
    </AuthenticatedKingdomShell>
  );
}
