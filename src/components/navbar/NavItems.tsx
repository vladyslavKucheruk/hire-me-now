"use client";

import { EMPLOYEE_CATEGORIES } from "@/const";
import { useState } from "react";
import { NavItem } from "./NavItem";

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="h-full flex gap-4">
      {EMPLOYEE_CATEGORIES.map((category, index) => {
        const isActive = activeIndex === index;

        const handleOpen = () => {
          if (isActive) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        return (
          <NavItem
            key={category.value}
            category={category}
            isOpen={isActive}
            isAnyOpen={activeIndex !== null}
            handleOpen={handleOpen}
          />
        );
      })}
    </div>
  );
};
