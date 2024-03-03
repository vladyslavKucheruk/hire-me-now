"use client";

import { RoutesEnum } from "@/app/Routes";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

import { Input, Label, Button, buttonVariants } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInFormValues, SignInSchema } from "../model/schema";
import { useForm } from "react-hook-form";
import { useSignIn } from "@/shared/api/auth";
import { useRouter, useSearchParams } from "next/navigation";

export const SignInPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const isAgency = params.get("as") === "agency";
  const origin = params.get("origin") || "";

  const { register, handleSubmit, formState } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInSchema),
  });

  const { mutate, isLoading } = useSignIn({ origin, isAgency });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  const onContinueAsCustomer = () => {
    router.replace(RoutesEnum.SIGN_IN, undefined);
  };

  const onContinueAsAgency = () => {
    router.push("?as=agency");
  };

  return (
    <div className="container  flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-1 text-center">
          <Icons.logo className="h-20 w-20 rainbow-gradient" />
          <h1 className="text-2xl font-bold">Login</h1>

          <Link
            className={buttonVariants({
              variant: "link",
              className: "gap-1",
            })}
            href={RoutesEnum.SIGN_UP}
          >
            Don't have an account? Sign up
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
                  type="password"
                />
              </div>

              <Button type="submit" disabled={isLoading}>
                Sign in
              </Button>
            </div>
          </form>

          <div className="relative">
            <div aria-hidden="true" className="absolute flex items-center inset-0">
              <span className="border-t w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>

          {isAgency ? (
            <Button disabled={isLoading} variant="outline" onClick={onContinueAsCustomer}>
              Continue as customer
            </Button>
          ) : (
            <Button disabled={isLoading} variant="outline" onClick={onContinueAsAgency}>
              Continue as agency
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
