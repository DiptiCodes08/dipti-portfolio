"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot   = dotRef.current;
    const ring  = ringRef.current;
    const prog  = progressRef.current;
    if (!dot || !ring || !prog) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onScroll = () => {
      const el = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      prog.style.width = `${Math.round(pct * 100)}%`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      dot.style.left  = `${mx}px`;
      dot.style.top   = `${my}px`;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;
      raf = requestAnimationFrame(tick);
    };

    const onHoverIn = () => {
      dot.parentElement?.classList.add("cursor-expanded");
    };
    const onHoverOut = () => {
      dot.parentElement?.classList.remove("cursor-expanded");
    };

    const interactives = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll",   onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll",   onScroll);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ width: "0%" }} />
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
