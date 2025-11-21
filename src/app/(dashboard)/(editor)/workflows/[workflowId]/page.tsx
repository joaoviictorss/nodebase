import { requireAuth } from "@/lib/auth-utils";

interface WorkflowIdPageProps {
  params: Promise<{
    workflowId: string;
  }>;
}

export const WorkflowIdPage = async ({ params }: WorkflowIdPageProps) => {
  await requireAuth();
  const { workflowId } = await params;

  return (
    <div>
      <h1>Workflow ID: {workflowId}</h1>
    </div>
  );
};

export default WorkflowIdPage;
