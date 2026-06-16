import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionLabel index="02">Experience</SectionLabel>

      <div className="border-t border-cream/10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <article className="group grid gap-6 border-b border-cream/10 py-10 transition-colors hover:bg-ink-2/40 md:grid-cols-12 md:gap-8 md:px-4">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl text-cream">{job.company}</h3>
                  {job.current && (
                    <span className="rounded-full bg-lime/15 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-lime uppercase">
                      Now
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs tracking-wider text-muted uppercase">{job.period}</p>
                <p className="mt-1 text-sm text-faint">{job.location}</p>
              </div>

              <div className="md:col-span-9">
                <p className="mb-4 font-mono text-sm tracking-wide text-lime/90">{job.role}</p>
                <ul className="space-y-3">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
                {job.stack && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-lime/20 px-3 py-1 font-mono text-[11px] tracking-wide text-lime/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
