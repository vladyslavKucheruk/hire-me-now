import Image from "next/image";

interface Props {
  email: string | string[] | undefined;
  token: string | string[] | undefined;
}

export const VerifyEmailPage = ({ email, token }: Props) => {
  return (
    <div className="container flex pt-20 flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6"></div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <div className="relative rounded-xl overflow-hidden mb-4 h-60 w-60 text-muted-foreground z-0">
              <Image src="/images/sent-email.png" fill alt="verify email image"></Image>
            </div>

            <h3 className="text-2xl font-semibold">Check your email</h3>

            {email ? (
              <p className="text-muted-foreground text-center">
                We have sent an email to <span className="font-semibold">{email}</span>.
              </p>
            ) : (
              <p className="text-muted-foreground text-center">
                We have sent an email to your email address. Please click the link in the email to
                verify your email address.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
