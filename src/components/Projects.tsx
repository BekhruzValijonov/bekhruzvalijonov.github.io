import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";
import { experience, projectGroups, projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionLabel index="03">Selected Projects</SectionLabel>

      <div className="space-y-24 md:space-y-32">
        {projectGroups.map((group) => {
          const items = projects.filter((p) => p.company === group.company);
          if (items.length === 0) return null;
          const period = experience.find((e) => e.company === group.company)?.period;

          return (
            <div key={group.company}>
              <Reveal className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-cream/10 pb-5">
                <div>
                  <h3 className="font-display text-3xl text-cream md:text-4xl">{group.title}</h3>
                  <p className="mt-1 text-muted">{group.caption}</p>
                </div>
                <p className="font-mono text-xs tracking-wider text-faint uppercase">
                  {period && <span>{period} · </span>}
                  {items.length} {items.length === 1 ? "project" : "projects"}
                </p>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {items.map((p, i) => (
                  <Reveal key={p.index} delay={(i % 2) * 0.08} className="min-w-0">
                    <ProjectCard project={p} offset={i % 2 === 1} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
