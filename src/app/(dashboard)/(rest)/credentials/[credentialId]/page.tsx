import { requireAuth } from "@/lib/auth-utils";

interface CredentialIdPageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

export const CredentialIdPage = async ({ params }: CredentialIdPageProps) => {
  await requireAuth();
  const { credentialId } = await params;

  return (
    <div>
      <h1>Credential ID: {credentialId}</h1>
    </div>
  );
};

export default CredentialIdPage;
