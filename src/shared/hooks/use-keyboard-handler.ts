"use client";

import { useEffect } from "react";

export const useKeyboardHandler = (
  ref: React.RefObject<HTMLElement>,
  key: KeyboardEvent["code"],
  handler: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        if (event.key === key) {
          handler(event);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, handler]);
};
