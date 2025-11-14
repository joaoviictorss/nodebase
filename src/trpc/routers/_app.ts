import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
   getUsers: baseProcedure.query(() => {
    return {
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
        },
      ],
    };
  }),
});
export type AppRouter = typeof appRouter;
