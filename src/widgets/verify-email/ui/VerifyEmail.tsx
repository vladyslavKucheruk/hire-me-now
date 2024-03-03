"use client";

import Image from "next/image";
import { useVerifyEmailMutation } from "@/shared/api/auth";
import { XCircle } from "lucide-react";

interface Props {
  token: string;
}

export const VerifyEmail = ({ token }: Props) => {
  const { data, status } = useVerifyEmailMutation(token);

  console.log(status);

  if (!data) {
    return (
      <div>
        <XCircle />
        <div>Error verifying email</div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div>
        <div className="relative rounded-xl overflow-hidden mb-4 h-60 w-60 text-muted-foreground z-0">
          <Image src="/images/sent-email.png" fill alt="verify email image"></Image>
        </div>
      </div>
    );
  }
};
