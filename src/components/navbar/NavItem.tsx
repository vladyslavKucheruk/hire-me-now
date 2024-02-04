"use client";

import { EMPLOYEE_CATEGORIES } from "@/const";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
    </div>
  );
};
