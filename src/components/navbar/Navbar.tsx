import { RoutesEnum } from "@/app/Routes";
import Link from "next/link";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import { NavItems } from "./NavItems";

export const Navbar = () => {
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
            </div>
          </MaxWidthWrapper>
        </div>
      </header>
    </div>
  );
};
