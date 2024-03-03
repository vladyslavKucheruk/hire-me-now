import { RoutesEnum } from "@/app/Routes";
import {
  buttonVariants,
  Separator,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui";
import { LucidePlugZap, LucideUnplug } from "lucide-react";
import Link from "next/link";

export const ConnectionsList = () => {
  const connections = 0;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <LucidePlugZap
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-600"
          size={24}
        />

        <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-600">0</span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Session activity (0)</SheetTitle>
        </SheetHeader>

        {connections > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">{/* TODO: logic for this component */}</div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Total connections</span>
                  <span>{connections}</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Free connections left</span>
                  <span>{connections}</span>
                </div>
              </div>
            </div>

            <SheetFooter className="flex w-full pr-6">
              <SheetTrigger asChild>
                <Link
                  href={RoutesEnum.CONNECTIONS}
                  className={buttonVariants({
                    className: "w-full",
                  })}
                >
                  View All
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-col h-full items-center justify-center space-y-2">
            <div>
              <LucideUnplug className="h-24 w-24 text-gray-400" />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-600">No connections yet</p>
              <Link
                href={RoutesEnum.CONNECTIONS}
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Start connecting
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
