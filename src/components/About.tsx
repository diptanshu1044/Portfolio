import { about } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function About() {
  return (
    <section
      id="about"
      className="section-pad section-y border-t border-line"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <SectionReveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-5">02 / {about.eyebrow}</p>
          <h2
            id="about-heading"
            className="display text-[clamp(3rem,5.5vw,5.75rem)] text-ink"
          >
            {about.headline}
          </h2>
          <div className="photo-placeholder mt-10 aspect-[16/10] rounded-3xl border border-line p-5">
            <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl border border-white/10 p-4">
              <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">
                Workspace / candid photo
              </span>
              <span className="self-end rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white/40">
                Placeholder 02
              </span>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08} className="space-y-7 lg:pt-24">
          {about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="prose-soft text-lg md:text-2xl md:leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line pt-0 sm:grid-cols-3">
            {[
              ["20+", "Production Features Shipped"],
              ["5+", "Client Projects Delivered"],
              ["Top 5", "Hackathon Finalist Out of 180+ teams"],
            ].map(([value, label]) => (
              <div key={label} className="bg-bg-elevated p-5 md:p-7">
                <p className="display text-2xl text-accent md:text-3xl">{value}</p>
                <p className="mt-2 text-xs text-ink-soft">{label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
