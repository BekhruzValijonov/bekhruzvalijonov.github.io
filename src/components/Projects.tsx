import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionLabel index="03">Selected Projects</SectionLabel>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.index} delay={(i % 2) * 0.08}>
            <article
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-ink-2/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-lime/40 md:p-9 ${
                i % 2 === 1 ? "md:mt-12" : ""
              }`}
            >
              {/* hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(203,255,70,0.18), transparent 70%)" }}
              />

              <div className="mb-6 flex items-start justify-between">
                <span className="font-display text-5xl text-faint transition-colors duration-500 group-hover:text-lime">
                  {p.index}
                </span>
                {p.links?.[0] ? (
                  <a
                    href={p.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-lime/40 px-3 py-1 font-mono text-[11px] tracking-wider text-lime uppercase transition-colors hover:bg-lime hover:text-ink"
                  >
                    Live
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                ) : (
                  <span className="font-mono text-lg text-faint transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cream">
                    ↗
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl leading-tight text-cream md:text-3xl">{p.title}</h3>
              <p className="mt-3 text-muted">{p.blurb}</p>

              <ul className="mt-5 space-y-2">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted/90">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime/60" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                {(p.links || p.note) && (
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] tracking-wide">
                    {p.links?.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-sweep text-cream hover:text-lime"
                      >
                        {l.label}
                      </a>
                    ))}
                    {p.note && <span className="text-faint">· {p.note}</span>}
                  </div>
                )}

                {p.credentials && (
                  <div className="mb-5 rounded-xl border border-lime/20 bg-lime/[0.04] p-4">
                    <p className="mb-3 font-mono text-[10px] tracking-widest text-lime uppercase">
                      Demo login · tap to copy
                    </p>
                    <div className="space-y-2">
                      {p.credentials.map((c) => (
                        <div key={c.role} className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                          <span className="w-20 shrink-0 text-faint">{c.role}</span>
                          <button
                            type="button"
                            onClick={() => navigator.clipboard?.writeText(c.login)}
                            className="rounded bg-cream/5 px-2 py-0.5 text-cream transition-colors hover:bg-cream/10 hover:text-lime"
                            title="Copy login"
                          >
                            {c.login}
                          </button>
                          <button
                            type="button"
                            onClick={() => navigator.clipboard?.writeText(c.password)}
                            className="rounded bg-cream/5 px-2 py-0.5 text-muted transition-colors hover:bg-cream/10 hover:text-lime"
                            title="Copy password"
                          >
                            {c.password}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-cream/10 px-3 py-1 font-mono text-[11px] tracking-wide text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
