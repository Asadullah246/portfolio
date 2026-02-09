"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for detecting when an element enters the viewport.
 * Used to trigger scroll-based animations.
 */
export function useIntersection({
  threshold = 0.1,
  rootMargin = "0px 0px -80px 0px",
  triggerOnce = true,
}: UseIntersectionOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
