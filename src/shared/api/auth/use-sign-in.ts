import { trpc } from "@/trpc-server/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSignIn = ({ isAgency, origin }: { origin?: string; isAgency?: boolean }) => {
  const router = useRouter();

  return trpc.auth.signIn.useMutation({
    onSuccess: () => {
      toast.success("Logged in successfully");
      router.refresh();

      if (origin) {
        router.push(`/${origin}`);
        return;
      }

      if (isAgency) {
        router.push("/crm");
        return;
      }

      router.push("/");
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        toast.error("Invalid email or password");
      }
    },
  });
};
