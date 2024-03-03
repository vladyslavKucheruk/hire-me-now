import { SignInPage } from "@/pages/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Me Now - Sign In",
  description:
    "Sign in to Hire Me Now and find the best employees for your company. We have a large pool of talented people ready to work for you.",
};

const page = () => {
  return <SignInPage />;
};

export default page;
