import { leadership } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="section-pad section-y border-t border-line"
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] border border-line bg-bg-elevated p-6 md:rounded-[3rem] md:p-12 lg:p-16">
        <SectionReveal className="mb-14 max-w-4xl">
          <p className="eyebrow mb-5">04 / Leadership & achievements</p>
          <h2
            id="leadership-heading"
            className="display text-[clamp(3rem,5.5vw,5.5rem)] text-ink"
          >
            Building people and products <span className="text-accent">under pressure.</span>
          </h2>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionReveal className="rounded-3xl border border-line bg-bg p-7 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
              {leadership.period}
            </p>
            <h3 className="display mt-8 text-3xl text-ink md:text-4xl">
              {leadership.title}
            </h3>
            <p className="prose-soft mt-4 text-base md:text-lg">
              {leadership.story}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="rounded-3xl border border-accent/20 bg-accent p-7 text-bg md:p-10">
            {leadership.achievements.map((item) => (
              <div key={item.title}>
                <p className="font-mono text-xs uppercase tracking-[.14em] text-bg/55">Competition highlight</p>
                <h3 className="display mt-8 text-3xl text-bg md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-bg/75 md:text-lg">
                  {item.detail}
                </p>
              </div>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
