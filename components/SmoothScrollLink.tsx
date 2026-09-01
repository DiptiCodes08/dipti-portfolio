"use client";

import { type ReactNode } from "react";

interface Props {
  to: string; // section id, e.g. "contact"
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function SmoothScrollLink({ to, className, onClick, children }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
