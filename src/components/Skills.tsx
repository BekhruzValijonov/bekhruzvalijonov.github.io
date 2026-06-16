import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { skills, education } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionLabel index="04">Skills &amp; Toolkit</SectionLabel>

      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.06}>
            <div className="border-t border-cream/10 pt-5">
              <h3 className="mb-4 font-mono text-xs tracking-widest text-lime uppercase">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-cream/10 bg-ink-2/40 px-3 py-1.5 text-sm text-muted transition-colors hover:border-cream/30 hover:text-cream"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Education */}
      <div className="mt-24">
        <Reveal className="mb-8 font-mono text-xs tracking-widest text-muted uppercase">Education</Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.06}>
              <div className="flex items-baseline justify-between gap-4 rounded-xl border border-cream/10 px-6 py-5">
                <div>
                  <p className="font-display text-xl text-cream">{e.school}</p>
                  <p className="text-sm text-muted">{e.program}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-faint">{e.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
