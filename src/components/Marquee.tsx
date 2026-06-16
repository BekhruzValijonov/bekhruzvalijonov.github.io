import { marqueeWords } from "../data";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee-pause relative flex overflow-hidden border-y border-cream/10 py-6 select-none">
      <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8" style={{ ["--duration" as string]: "38s" }}>
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-3xl text-muted md:text-5xl">
            {w}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
      <div
        className="animate-marquee flex shrink-0 items-center gap-8 pr-8"
        style={{ ["--duration" as string]: "38s" }}
        aria-hidden
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-3xl text-muted md:text-5xl">
            {w}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
