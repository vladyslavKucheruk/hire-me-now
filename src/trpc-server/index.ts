import { authRouter } from "./auth";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  health: publicProcedure.query(() => {
    return "I'm alive!";
  }),
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
