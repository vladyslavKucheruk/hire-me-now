import { getPayloadClient } from "../server/get-payload";
import { SignUpSchema } from "../shared/validators/sign-up.schema";
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

    console.log("Creating user");

    await payload.create({
      collection: "users",
      data: {
        email,
        password,
      },
    });

    return { success: true, email, message: "Account created successfully" };
  }),
});
