import { motion } from "motion/react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { profile } from "../data";

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.githubLabel, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-cream/10 px-6 pt-24 pb-10 md:px-10 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(203,255,70,0.12), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="05">Contact</SectionLabel>

        <Reveal>
          <a href={`mailto:${profile.email}`} className="group block">
            <h2 className="font-display text-[12vw] leading-[0.9] font-light tracking-tight text-cream md:text-[9rem]">
              Let&rsquo;s build
              <br />
              <span className="italic">something</span>{" "}
              <span className="text-outline transition-colors duration-500 group-hover:text-lime group-hover:[-webkit-text-stroke:0]">
                great.
              </span>
            </h2>
          </a>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-3 bg-ink p-6 transition-colors hover:bg-ink-2"
            >
              <span className="font-mono text-xs tracking-widest text-faint uppercase">{s.label}</span>
              <span className="flex items-center gap-2 break-all text-cream">
                <span className="link-sweep">{s.value}</span>
                <span className="text-faint transition-all group-hover:translate-x-0.5 group-hover:text-lime">↗</span>
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 font-mono text-xs tracking-wider text-faint uppercase sm:flex-row">
          <span>© {new Date().getFullYear()} Bekhruz Valijonov</span>
          <span>Tashkent · {profile.role}</span>
          <a href="#top" className="transition-colors hover:text-cream">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
