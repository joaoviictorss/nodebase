import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "5s");

    const workflow = await prisma.workflow.create({
      data: {
        name: event.data.name,
      },
    });

    return {
      success: true,
      message: "Workflow created",
      workflow,
    };
  }
);
