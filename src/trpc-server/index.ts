import { authRouter } from "./auth";
import { publicProcedure, router } from "./trpc";

// import { Resend } from 'resend';

// const resend = new Resend('re_LnHg1n9N_71nxyVC8Xf1s5LW9X2W3KvVw');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'bombardire54@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

export const appRouter = router({
  health: publicProcedure.query(() => {
    return "I'm alive!";
  }),
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
