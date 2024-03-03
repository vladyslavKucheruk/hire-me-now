"use client";

import { EMPLOYEE_CATEGORIES } from "@/const";
import { useRef, useState } from "react";
import { NavItem } from "./NavItem";
import { useKeyboardHandler, useOnClickOutside } from "@/shared/hooks";

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navBarRef = useRef<HTMLDivElement | null>(null);

  useKeyboardHandler(navBarRef, "Escape", () => {
    setActiveIndex(null);
  });

  useOnClickOutside(navBarRef, () => {
    setActiveIndex(null);
  });

  return (
    <div className="h-full flex gap-4" ref={navBarRef}>
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
