import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { profile, languages } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionLabel index="01">About</SectionLabel>

      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-display text-3xl leading-[1.25] font-light text-cream sm:text-4xl md:text-[2.7rem]">
              I turn complex, high-volume product requirements into{" "}
              <span className="italic text-lime">interfaces people actually enjoy using</span> — fast,
              accessible and built to scale.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:pl-8">
          <Reveal delay={0.15} className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-cream/10 pb-4">
              <span className="font-mono text-xs tracking-widest text-faint uppercase">Languages</span>
            </div>
            {languages.map((l) => (
              <div key={l.name}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-cream">{l.name}</span>
                  <span className="font-mono text-xs text-muted">{l.level}</span>
                </div>
                <div className="h-px w-full bg-cream/10">
                  <div
                    className="h-px bg-lime transition-all"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
