import { SignUpPage } from "@/_pages/sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Me Now - Sign Up",
  description:
    "Sign up to Hire Me Now and find the best employees for your company. We have a large pool of talented people ready to work for you.",
};

const page = () => {
  return <SignUpPage />;
};

export default page;
