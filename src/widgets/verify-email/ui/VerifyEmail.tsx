"use client";

import Image from "next/image";
import { useVerifyEmailMutation } from "@/shared/api/auth";
import { Loader, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { RoutesEnum } from "@/app/Routes";
import { buttonVariants } from "@/shared/ui";

interface Props {
  token: string;
}

export const VerifyEmail = ({ token }: Props) => {
  const { data, isError } = useVerifyEmailMutation(token);

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-500" />
        <h3 className="font-semibold text-xl">Error verifying email</h3>
        <p className="text-muted-foreground text-center">
          There was an error verifying your email. Please try again or contact support if the
          problem persists.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative rounded-xl overflow-hidden mb-4 h-60 w-60 text-muted-foreground z-0">
          <Image src="/images/sent-email.png" fill alt="verify-email-was-sent" />
        </div>

        <h3 className="text-2xl font-semibold">You are all set!</h3>
        <p className="text-muted-foreground text-center mt-2 text-center">
          Thank you for verifying your email. You can now login to your account.
        </p>
        <Link
          className={buttonVariants({
            className: "mt-4",
          })}
          href={RoutesEnum.SIGN_IN}
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Loader2 className="animate-spin h-8 w-8 text-zinc-400" />
      <h3 className="font-semibold text-xl">Verifying your email...</h3>
      <p className="text-muted-foreground text-center">
        Please wait while we verify your email. This should only take a few seconds.
      </p>
    </div>
  );
};
