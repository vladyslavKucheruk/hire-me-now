import { useEffect } from "react";

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const target = ref.current;

      if (!target || target.contains(event.target as Node)) {
        return;
      }

      handler(event as MouseEvent | TouchEvent);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
};
