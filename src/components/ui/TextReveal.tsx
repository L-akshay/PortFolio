"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: string;
  delay?: number;
  className?: string;
};

/**
 * Word-by-word rise-in when the text enters the viewport.
 * Words start hidden via the .reveal-word class (globals.css) and get
 * .revealed staggered by 50ms; reduced-motion users see them instantly.
 */
export function TextReveal({ children, delay = 0, className }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".reveal-word").forEach((word, index) => {
            setTimeout(() => word.classList.add("revealed"), delay + index * 50);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children.split(" ").map((word, index) => (
        <span key={index} className="reveal-word" style={{ marginRight: "0.25em" }}>
          {word}
        </span>
      ))}
    </div>
  );
}
