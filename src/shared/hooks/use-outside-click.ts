"use client";

import { RefObject } from "react";
import { useEventListener } from "./use-event-listener";

type EventType = "mousedown" | "mouseup" | "touchstart" | "touchend";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | RefObject<T>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  eventType: EventType = "mousedown"
): void {
  useEventListener(eventType, (event) => {
    const target = event.target as Node;

    if (!target || !target.isConnected) {
      return;
    }

    const isOutside = Array.isArray(ref)
      ? ref.every((r) => r.current && !r.current.contains(target))
      : ref.current && !ref.current.contains(target);

    if (isOutside) {
      handler(event);
    }
  });
}
