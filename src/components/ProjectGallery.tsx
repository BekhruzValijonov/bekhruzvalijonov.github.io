import { useState } from "react";
import type { ProjectImage } from "../data";
import Lightbox from "./Lightbox";

/** Horizontal strip of a project's screens; any one opens the lightbox at that screen. */
export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-6">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-widest text-faint uppercase">
        <span>{images.length} screens</span>
        <span className="hidden sm:inline">click to enlarge</span>
      </div>
      <div className="-mx-7 flex gap-3 overflow-x-auto px-7 pb-2 [scrollbar-width:thin] md:-mx-9 md:px-9">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open screen: ${img.alt}`}
            className="group/shot relative h-36 shrink-0 overflow-hidden rounded-lg border border-cream/10 bg-ink transition-all hover:-translate-y-0.5 hover:border-lime/50 focus-visible:border-lime focus-visible:outline-none"
            style={{ aspectRatio: `${img.w} / ${img.h}` }}
          >
            <img
              src={img.thumb}
              alt={img.alt}
              loading="lazy"
              width={img.w}
              height={img.h}
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/95 to-ink/0 px-2 pt-6 pb-1.5 text-left text-[11px] leading-tight text-cream transition-transform group-hover/shot:translate-y-0">
              {img.alt}
            </span>
          </button>
        ))}
      </div>
      <Lightbox images={images} index={open} onClose={() => setOpen(null)} />
    </div>
  );
}
