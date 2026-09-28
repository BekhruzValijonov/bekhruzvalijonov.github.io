import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { profile, now } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <SectionLabel index="01">About</SectionLabel>

      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-display text-3xl leading-[1.25] font-light text-cream sm:text-4xl md:text-[2.7rem]">
              I solve problems at the scale of{" "}
              <span className="italic text-lime">a whole country's queues</span> — from the kiosk in the
              hall to the dashboard at headquarters.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:pl-8">
          <Reveal delay={0.15}>
            <div className="flex items-baseline justify-between border-b border-cream/10 pb-4">
              <span className="font-mono text-xs tracking-widest text-faint uppercase">Now</span>
              {profile.available && (
                <span className="flex items-center gap-2 font-mono text-xs text-lime">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                  Available
                </span>
              )}
            </div>
            <dl className="divide-y divide-cream/10">
              {now.map((n) => (
                <div key={n.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4">
                  <dt className="font-mono text-xs tracking-widest text-faint uppercase">{n.label}</dt>
                  <dd>
                    <p className="text-cream">{n.value}</p>
                    <p className="text-sm text-muted">{n.detail}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
