"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

const visualColors = [
  "rgba(200,255,54,.2)",
  "rgba(94,129,255,.24)",
  "rgba(255,107,178,.2)",
];

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="work"
      className="section-pad section-y border-t border-line"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[90rem]">
        <SectionReveal className="mb-16 grid gap-6 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">01 / Selected work</p>
            <h2
              id="work-heading"
              className="display text-[clamp(3rem,6.5vw,6.5rem)] text-ink"
            >
              Ideas turned into <span className="text-ink-soft">working systems.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            A selection of full-stack products shaped from architecture and APIs through deployment and operations.
          </p>
        </SectionReveal>

        <ul className="space-y-28 md:space-y-40">
          {projects.map((project, index) => (
            <li key={project.id}>
              <SectionReveal>
                <article className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <motion.div
                    className="project-visual group rounded-[1.75rem] p-4 md:min-h-[34rem] md:p-7"
                    style={{ "--visual-color": visualColors[index] } as React.CSSProperties}
                    whileHover={reduce ? undefined : { y: -8 }}
                    transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  >
                    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/45">Project visual placeholder</span>
                      <span className="flex gap-1.5">
                        <i className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <i className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <i className="h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                    </div>
                    <div className="relative z-10 mt-10 md:mt-16">
                      <motion.div
                        className="mx-auto w-[88%] rounded-2xl border border-white/10 bg-black/40 p-5 shadow-2xl backdrop-blur-md"
                        whileHover={reduce ? undefined : { scale: 1.025 }}
                      >
                        <div className="mb-8 flex items-center justify-between">
                          <div className="h-3 w-24 rounded-full bg-white/10" />
                          <div className="h-8 w-8 rounded-full bg-accent/80" />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="col-span-2 h-32 rounded-xl border border-white/10 bg-white/[.035] p-3">
                            <div className="h-full rounded-lg bg-gradient-to-tr from-accent/5 to-accent/20" />
                          </div>
                          <div className="space-y-3">
                            <div className="h-[3.75rem] rounded-xl bg-white/[.05]" />
                            <div className="h-[3.75rem] rounded-xl bg-white/[.05]" />
                          </div>
                        </div>
                        <div className="mt-3 h-16 rounded-xl bg-white/[.035]" />
                      </motion.div>
                      <div className="absolute -bottom-5 -right-2 rounded-full border border-white/10 bg-bg-elevated px-4 py-2 font-mono text-[10px] uppercase tracking-[.14em] text-ink-muted">
                        Add screenshot here
                      </div>
                    </div>
                  </motion.div>

                  <div className="max-w-xl">
                    <div className="mb-5 flex items-center gap-4">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                        0{index + 1}
                      </span>
                      <span className="h-px w-10 bg-line-strong" />
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="display text-[clamp(2.5rem,5vw,5rem)] text-ink">{project.title}</h3>
                    <p className="mt-6 text-lg leading-relaxed text-ink-muted">{project.summary}</p>
                    <p className="prose-soft mt-5 text-sm md:text-base">{project.narrative}</p>
                    <ul className="mt-7 space-y-3">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3 text-sm text-ink-muted">
                          <span className="text-accent">↗</span>{outcome}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tech stack">
                      {project.stack.map((tech) => (
                        <li key={tech} className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-ink-soft">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-8 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-medium text-ink"
                        whileHover={reduce ? undefined : { x: 6 }}
                      >
                        Visit live project <span className="text-accent">↗</span>
                      </motion.a>
                    )}
                  </div>
                </article>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
