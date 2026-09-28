import Reveal from "./Reveal";
import { principles } from "../data";

/** Four short statements about how I work — sits where a tech marquee would usually go. */
export default function Principles() {
  return (
    <section aria-label="How I work" className="border-y border-cream/10">
      <div className="mx-auto grid max-w-7xl divide-y divide-cream/10 px-6 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-10">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
            <p className="mb-3 font-mono text-xs tracking-widest text-lime">0{i + 1}</p>
            <h3 className="font-display text-2xl leading-tight text-cream">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
