import { requireAuth } from "@/lib/auth-utils";

const WorkflowsPage = async () => {
  await requireAuth();

  return (
    <div>
      <h1>Workflows</h1>
    </div>
  );
};

export default WorkflowsPage;
