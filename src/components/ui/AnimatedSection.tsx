"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in seconds. */
  delay?: number;
};

/**
 * Fade + slight rise, once, when the block enters the viewport.
 *
 * Always renders the same markup on server and client — reduced-motion
 * preferences are honored via <MotionConfig reducedMotion="user"> in
 * Providers (movement is dropped, leaving a simple fade). Branching on
 * useReducedMotion() here would cause a hydration mismatch, because the
 * server cannot know the visitor's OS setting.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
