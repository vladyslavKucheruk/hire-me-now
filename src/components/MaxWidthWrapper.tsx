import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};
