import { RoutesEnum } from "@/app/Routes";
import { trpc } from "@/trpc-server/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ZodError } from "zod";

export const useSignUpMutation = () => {
  const router = useRouter();

  return trpc.auth.signUp.useMutation({
    onSuccess: ({ email }) => {
      toast.success(`Verification email sent to ${email}. Please check your inbox.`);
      router.replace(`${RoutesEnum.VERIFY_EMAIL}?email=${email}`);
    },
    onError: (err) => {
      if (err.data?.code === "CONFLICT") {
        return toast.error("Email already exists");
      }
      if (err instanceof ZodError) {
        return toast.error(err.issues[0].message);
      }

      return toast.error("Something went wrong");
    },
  });
};
