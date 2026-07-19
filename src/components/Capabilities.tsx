import { capabilities } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Capabilities() {
  return (
    <section
      id="craft"
      className="section-y overflow-hidden border-t border-line"
      aria-labelledby="craft-heading"
    >
      <div className="section-pad mx-auto max-w-[90rem]">
        <SectionReveal className="mb-16 max-w-4xl md:mb-24">
          <p className="eyebrow mb-5">05 / Technical craft</p>
          <h2
            id="craft-heading"
            className="display text-[clamp(3rem,6vw,6rem)] text-ink"
          >
            Tools are temporary. <span className="text-ink-soft">Good systems endure.</span>
          </h2>
        </SectionReveal>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((group, index) => (
            <SectionReveal key={group.group} delay={index * 0.05} className="h-full bg-bg p-7 transition-colors duration-300 hover:bg-bg-elevated md:p-9">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                0{index + 1} / {group.group}
              </h3>
              <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-3">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-muted transition-colors hover:border-accent/40 hover:text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
      <div className="mt-20 border-y border-line py-5">
        <div className="marquee-track flex gap-8 font-display text-3xl uppercase text-ink-soft md:text-5xl" aria-hidden>
          {[0, 1].map((set) => (
            <span key={set} className="flex shrink-0 gap-8">
              Architecture <b className="text-accent">✦</b> APIs <b className="text-accent">✦</b> Cloud <b className="text-accent">✦</b> Realtime <b className="text-accent">✦</b> AI integration <b className="text-accent">✦</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
