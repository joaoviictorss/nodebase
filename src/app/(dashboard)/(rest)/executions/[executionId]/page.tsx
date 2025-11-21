import { requireAuth } from "@/lib/auth-utils";

interface ExecutionIdPageProps {
  params: Promise<{
    executionId: string;
  }>;
}

export const ExecutionIdPage = async ({ params }: ExecutionIdPageProps) => {
  await requireAuth();
  const { executionId } = await params;

  return (
    <div>
      <h1>executionId ID: {executionId}</h1>
    </div>
  );
};

export default ExecutionIdPage;
