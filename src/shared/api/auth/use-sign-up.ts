import { RoutesEnum } from "@/app/Routes";
import { trpc } from "@/trpc-server/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSignUpMutation = () => {
  const router = useRouter();

  return trpc.auth.signUp.useMutation({
    onSuccess: () => {
      toast.success("Account created");
      router.replace(RoutesEnum.SIGN_IN);
    },
  });
};
