import { site } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";
import { ContactForm } from "@/components/ContactForm";

const links = [
  { href: `mailto:${site.email}`, label: "Email", external: false },
  { href: site.github, label: "GitHub", external: true },
  { href: site.linkedin, label: "LinkedIn", external: true },
  { href: site.resume, label: "Resume PDF", external: false, download: true },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad section-y border-t border-line"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[90rem] gap-14 overflow-hidden rounded-[2rem] border border-line bg-bg-elevated p-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20 md:rounded-[3rem] md:p-14 lg:p-20">
        <SectionReveal>
          <p className="eyebrow mb-5">07 / Contact</p>
          <h2
            id="contact-heading"
            className="display text-[clamp(3.2rem,6vw,6.5rem)] text-ink"
          >
            Let’s build something <span className="text-accent">that ships.</span>
          </h2>
          <p className="prose-soft mt-5 text-base md:text-lg">
            Open to software engineering roles, backend/fullstack work, AI
            products, and freelance collaborations. Prefer the form — or reach
            out directly.
          </p>

          <ul className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...("download" in link && link.download
                    ? { download: true }
                    : {})}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="focus-ring group inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="font-medium">{link.label}</span>
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <ContactForm />
        </SectionReveal>
      </div>
    </section>
  );
}
