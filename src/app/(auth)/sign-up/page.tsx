"use client";

import { RoutesEnum } from "@/app/Routes";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/shared";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormValues, SignUpSchema } from "@/shared/validators";
import { trpc } from "@/trpc-server/client";

const SignUpPage = () => {
  const { register, handleSubmit, formState } = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
  });

  const { data } = trpc.health.useQuery();

  console.log(data);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="container  flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-1 text-center">
          <Icons.logo className="h-20 w-20 rainbow-gradient" />
          <h1 className="text-2xl font-bold">Create an account</h1>

          <Link
            className={buttonVariants({
              variant: "link",
              className: "gap-1",
            })}
            href={RoutesEnum.SIGN_IN}
          >
            Already have an account? Sign in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6">
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": formState.errors.email?.message,
                  })}
                  placeholder="your-email@example.com"
                />
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Password</Label>
                <Input
                  {...register("password")}
                  className={cn({
                    "focus-visible:ring-red-500": formState.errors.password?.message,
                  })}
                  placeholder="********"
                />
              </div>

              <Button type="submit">Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
