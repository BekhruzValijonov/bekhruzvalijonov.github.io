import Reveal from "./Reveal";

/** Small monospace eyebrow used to head every section. */
export default function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <Reveal className="mb-10 flex items-center gap-4 font-mono text-xs tracking-widest text-muted uppercase">
      <span className="text-lime">{index}</span>
      <span className="h-px w-8 bg-cream/20" />
      {children}
    </Reveal>
  );
}
