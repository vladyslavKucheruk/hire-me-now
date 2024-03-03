import { VerifyEmailPage } from "@/_pages/verify-email";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = ({ searchParams }: Props) => {
  const token = searchParams.token;
  const email = searchParams.email;

  return <VerifyEmailPage email={email} token={token} />;
};

export default page;
