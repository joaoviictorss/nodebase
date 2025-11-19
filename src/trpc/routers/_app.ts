import { z } from "zod";
import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../init";
export const appRouter = createTRPCRouter({
  testAi: protectedProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      await inngest.send({
        name: "execute/ai",
        data: {
          prompt: input.prompt,
        },
      });
    }),

  getWorkflows: protectedProcedure.query(() => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        name: "test",
      },
    });

    return {
      success: true,
      message: "Job queued",
    };
  }),
});
export type AppRouter = typeof appRouter;
