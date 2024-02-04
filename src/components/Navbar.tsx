import { RoutesEnum } from "@/app/Routes";
import { Bomb } from "lucide-react";
import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export const Navbar = () => {
  return (
    <div className="sticky top-0">
      <MaxWidthWrapper className="py-3">
        <div>
          <div>
            <Link href={RoutesEnum.HOME}>
              <div className="flex items-center gap-2">
                <Bomb />
                <p className="text-xl">Hire Me Now</p>
              </div>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
