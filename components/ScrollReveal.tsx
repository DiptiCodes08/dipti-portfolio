"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up" ? 28 : 0,
        x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
      }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: direction === "up" ? 28 : 0, x: direction === "left" ? -24 : direction === "right" ? 24 : 0 }
      }
      transition={{ delay, duration: 0.65, type: "tween" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
