import { currently } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Currently() {
  return (
    <section
      id="currently"
      className="section-pad section-y border-t border-line"
      aria-labelledby="currently-heading"
    >
      <div className="mx-auto max-w-[90rem]">
        <SectionReveal>
          <p className="eyebrow mb-5">06 / {currently.eyebrow}</p>
          <h2
            id="currently-heading"
            className="display max-w-5xl text-[clamp(3rem,6vw,6rem)] text-ink"
          >
            {currently.headline}
          </h2>
          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {currently.items.map((item, index) => (
              <li
                key={item}
                className="group min-h-60 rounded-3xl border border-line bg-bg-elevated/50 p-7 text-base text-ink-muted transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 md:p-8 md:text-lg"
              >
                <span className="mb-16 block font-mono text-xs text-accent">0{index + 1}</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
