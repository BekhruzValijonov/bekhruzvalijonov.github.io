import { motion } from "motion/react";
import { profile } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl"
      >
        <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-widest text-muted uppercase">
          <span className="text-lime">●</span>
          <span>{profile.location}</span>
          <span className="text-faint">/</span>
          <span>{profile.role}</span>
        </motion.div>

        <h1 className="font-display leading-[0.86] tracking-[-0.02em]">
          <motion.span variants={item} className="block text-[16vw] font-light text-cream sm:text-[13vw] lg:text-[11rem]">
            Bekhruz
          </motion.span>
          <motion.span variants={item} className="block text-[16vw] sm:text-[13vw] lg:text-[11rem]">
            <span className="text-outline">Vali</span>
            <span className="font-light text-cream italic">jonov</span>
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-muted md:col-span-7 md:text-xl">
            I build production <span className="text-cream">web, desktop &amp; mobile</span> apps —
            real-time dashboards, interactive data viz and clean cross-platform delivery.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-lime px-6 py-3 font-mono text-xs font-semibold tracking-widest text-ink uppercase transition-transform hover:scale-[1.03]"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-1">↘</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-6 py-3 font-mono text-xs tracking-widest text-cream uppercase transition-colors hover:border-cream/40"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-faint uppercase md:flex"
      >
        Scroll
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-faint to-transparent" />
      </motion.a>
    </section>
  );
}
