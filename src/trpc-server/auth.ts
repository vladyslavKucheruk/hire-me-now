import { z } from "zod";
import { SignUpSchema } from "../_pages/sign-up/model/schema";
import { getPayloadClient } from "../server/get-payload";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  signUp: publicProcedure.input(SignUpSchema).mutation(async ({ input }) => {
    const { email, password } = input;

    const payload = await getPayloadClient();

    const { docs } = await payload.find({
      collection: "users",
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (docs.length) {
      throw new TRPCError({ code: "CONFLICT" });
    }

    await payload.create({
      collection: "users",
      data: {
        email,
        password,
      },
    });

    return { success: true, email, message: "Account created successfully" };
  }),

  verifyEmail: publicProcedure.input(z.object({ token: z.string() })).query(async ({ input }) => {
    const { token } = input;
    const payload = await getPayloadClient();

    try {
      const isVerified = await payload.verifyEmail({ collection: "users", token });
      if (!isVerified) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      return { success: true };
    } catch (error) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
  }),
});
