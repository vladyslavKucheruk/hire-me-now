import { trpc } from "@/trpc-server/client";

export const useVerifyEmailMutation = (token: string) => {
  return trpc.auth.verifyEmail.useQuery({
    token,
  });
};
