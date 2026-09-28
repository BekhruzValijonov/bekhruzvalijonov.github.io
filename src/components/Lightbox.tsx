import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import type { ProjectImage } from "../data";

type Props = { images: ProjectImage[]; index: number | null; onClose: () => void };

/** Full-screen viewer for a project's screens: arrows and keyboard to move, Esc or backdrop to close. */
export default function Lightbox({ images, index, onClose }: Props) {
  const [i, setI] = useState(index ?? 0);
  const open = index !== null;

  useEffect(() => {
    if (index !== null) setI(index);
  }, [index]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((n) => (n + 1) % images.length);
      if (e.key === "ArrowLeft") setI((n) => (n - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, images.length, onClose]);

  const img = images[i];

  return createPortal(
    <AnimatePresence>
      {open && img && (
        <motion.div
          role="dialog"
          aria-modal
          aria-label={img.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-4 font-mono text-xs tracking-widest text-muted uppercase">
            <span>
              {i + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-cream/15 px-4 py-2 text-cream transition-colors hover:border-cream/40"
            >
              Close · Esc
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20">
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-xl border border-cream/10 object-contain shadow-2xl"
            />
            {images.length > 1 && (
              <>
                <NavButton side="left" onClick={(e) => { e.stopPropagation(); setI((n) => (n - 1 + images.length) % images.length); }} />
                <NavButton side="right" onClick={(e) => { e.stopPropagation(); setI((n) => (n + 1) % images.length); }} />
              </>
            )}
          </div>

          <div className="px-5 pt-3 pb-5 text-center">
            <p className="text-sm text-cream">{img.alt}</p>
            {images.length > 1 && (
              <div className="mt-3 flex justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {images.map((im, n) => (
                  <button
                    key={im.src}
                    type="button"
                    aria-label={`Screen ${n + 1}`}
                    onClick={() => setI(n)}
                    className={`h-1.5 rounded-full transition-all ${n === i ? "w-6 bg-lime" : "w-1.5 bg-cream/25 hover:bg-cream/50"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      type="button"
      aria-label={side === "left" ? "Previous screen" : "Next screen"}
      onClick={onClick}
      className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/15 bg-ink/70 text-cream transition-colors hover:border-lime hover:text-lime md:flex ${
        side === "left" ? "left-4" : "right-4"
      }`}
    >
      {side === "left" ? "←" : "→"}
    </button>
  );
}
