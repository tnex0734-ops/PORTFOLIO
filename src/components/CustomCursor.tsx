"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-80);
  const y = useMotionValue(-80);
  const smoothX = useSpring(x, { stiffness: 260, damping: 32, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 260, damping: 32, mass: 0.4 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as Element | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor-hover]")));
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
      style={{ x: smoothX, y: smoothY }}
    >
      <motion.div
        className="rounded-full bg-[var(--ink)]"
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          width: active ? 34 : 14,
          height: active ? 34 : 14,
          x: active ? -17 : -7,
          y: active ? -17 : -7,
        }}
        transition={{ duration: 0.16, ease: "easeOut" }}
      />
    </motion.div>
  );
}
