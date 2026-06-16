import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Soft lime glow that trails the pointer + a small precise ring.
 * Disabled on touch / coarse pointers where it adds nothing.
 */
export default function Cursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const glowX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 hidden h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        x: glowX,
        y: glowY,
        background:
          "radial-gradient(circle, rgba(120,170,20,0.10) 0%, rgba(120,170,20,0.04) 35%, transparent 68%)",
      }}
    />
  );
}
