import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { skills, education } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionLabel index="04">How I work</SectionLabel>

      <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.06}>
            <div className="border-t border-cream/10 pt-5">
              <h3 className="mb-3 font-mono text-xs tracking-widest text-lime uppercase">{group.label}</h3>
              <p className="max-w-prose leading-relaxed text-muted">{group.text}</p>
              <p className="mt-4 font-mono text-[11px] tracking-wide text-faint">{group.tools.join("  ·  ")}</p>
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
