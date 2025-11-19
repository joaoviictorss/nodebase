"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";

const Home = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
        toast.success("Job queued");
      },
    })
  );

  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("AI response received");
      },
    })
  );

  return (
    <div>
      <h1>Workflows</h1>
      <ul>
        {data?.map((workflow) => (
          <li key={workflow.id}>{JSON.stringify(workflow, null, 2)}</li>
        ))}
      </ul>

      <Button
        disabled={testAi.isPending}
        onClick={() =>
          testAi.mutate({ prompt: "Olá, como vai?" })
        }
      >
        Test AI
      </Button>

      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
    </div>
  );
};

export default Home;
