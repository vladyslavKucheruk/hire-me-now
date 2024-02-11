import { RoutesEnum } from "@/app/Routes";
import Link from "next/link";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import { NavItems } from "./NavItems";
import { buttonVariants } from "@/shared/ui/button";
import { ConnectionsList } from "@/features";

export const Navbar = () => {
  const user = null;

  return (
    <div className="bg-white sticky top-0 z-100 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <MaxWidthWrapper>
            <div className="flex h-16 items-center">
              {/* TODO: mobile navbar  */}

              <div className="ml-4 flex lg:ml-0">
                <Link href={RoutesEnum.HOME}>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="z-100 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href={RoutesEnum.SIGN_IN}
                      className={buttonVariants({
                        variant: "outline",
                        className: "hover:bg-primary/90 hover:text-primary-foreground",
                      })}
                    >
                      Sign in
                    </Link>
                  )}

                  {user ? null : <div className="h-8 w-px bg-gray-200" aria-hidden="true" />}

                  {user ? null : (
                    <Link
                      href={RoutesEnum.SIGN_UP}
                      className={buttonVariants({
                        variant: "outline",
                        className: "hover:bg-primary/90 hover:text-primary-foreground",
                      })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? null : <div className="h-8 w-px bg-gray-200" aria-hidden="true" />}

                  <div className="ml-4 lg:ml-6 flow-root">
                    <ConnectionsList />
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </header>
    </div>
  );
};
