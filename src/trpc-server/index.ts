import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  health: publicProcedure.query(() => {
    return "I'm alive!";
  }),
});

export type AppRouter = typeof appRouter;
