import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignUpFormValues = z.infer<typeof SignUpSchema>;
