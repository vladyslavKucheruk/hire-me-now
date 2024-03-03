"use client";

import { EMPLOYEE_CATEGORIES } from "@/const";
import { Button } from "@/shared/ui";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof EMPLOYEE_CATEGORIES)[number];

interface Props {
  category: Category;
  isOpen: boolean;
  isAnyOpen: boolean;
  handleOpen: () => void;
}

export const NavItem = ({ category, isOpen, isAnyOpen, handleOpen }: Props) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="flex gap-1"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "transform rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn("absolute z-100 inset-x-0 top-full text-muted-foreground", {
            "animate-in fade-in-40 slide-in-from-top-5": !isAnyOpen,
          })}
        >
          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-8">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8 gap-y-4">
                  {category.featured.map((feat) => (
                    <div key={feat.href} className=" group relative text-base sm:text-sm">
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                          src={feat.imageSrc}
                          alt="category image"
                          fill
                          className="object-center object-cover"
                        />
                      </div>
                      <Link
                        className="mt-6 block text-lg font-medium text-gray-900"
                        href={feat.href}
                      >
                        {feat.name}
                      </Link>

                      <p className="mt-1 text-gray-500">Hire now!</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
