import { experience } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad section-y border-t border-line"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[90rem]">
        <SectionReveal className="mb-16 max-w-4xl md:mb-24">
          <p className="eyebrow mb-5">03 / Experience</p>
          <h2
            id="experience-heading"
            className="display text-[clamp(3rem,6vw,6rem)] text-ink"
          >
            Roles where ownership met <span className="text-ink-soft">measurable impact.</span>
          </h2>
        </SectionReveal>

        <ol className="relative grid gap-4 md:grid-cols-2">
          {experience.map((item, index) => (
            <li key={`${item.org}-${item.role}`} className="relative">
              <SectionReveal delay={index * 0.04}>
                <article className="group flex min-h-[23rem] flex-col rounded-3xl border border-line bg-bg-elevated/60 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:bg-bg-elevated md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[.18em] text-accent">0{index + 1}</span>
                    <div className="text-right">
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">{item.period}</p>
                      <p className="mt-1 text-xs text-ink-soft">{item.location}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-16">
                    <h3 className="display text-3xl text-ink md:text-4xl">
                      {item.role}
                    </h3>
                    <p className="mt-2 font-medium text-accent">{item.org}</p>
                    <p className="prose-soft mt-5 text-sm md:text-base">
                      {item.story}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
