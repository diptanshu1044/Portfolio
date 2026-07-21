"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/content";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, 90]);

  return (
    <section
      id="top"
      className="section-pad relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pb-20 md:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
          animate={reduce ? undefined : { scale: [1, 1.18, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-16 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[140px]"
          animate={reduce ? undefined : { scale: [1.15, 1, 1.15], y: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative mx-auto grid w-full max-w-[90rem] items-center gap-14 lg:grid-cols-[1.08fr_.72fr] lg:gap-8"
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={reduce ? undefined : container}
      >
        <div>
          <motion.div variants={reduce ? undefined : item} className="mb-7 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <p className="eyebrow">Available for ambitious projects</p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={reduce ? undefined : item}
            className="display max-w-[18ch] text-[clamp(2.6rem,6.5vw,5.5rem)] text-ink"
          >
            I build scalable backend systems,{" "}
            <span className="text-accent">modern web applications, and AI-powered products.</span>
          </motion.h1>

          <motion.div variants={reduce ? undefined : item} className="mt-8 grid max-w-3xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
              I&apos;m {site.name}, {site.tagline}
            </p>
            <p className="font-mono text-xs uppercase leading-relaxed tracking-[.16em] text-ink-soft">
              {site.role}
              <br />
              Dehradun, India
            </p>
          </motion.div>

          <motion.div variants={reduce ? undefined : item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="magnetic-link focus-ring rounded-full border border-accent bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:text-bg"
            >
              Explore selected work ↘
            </a>
            <a
              href={site.resume}
              download
              className="focus-ring rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Download résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={reduce ? undefined : item}
          style={reduce ? undefined : { y: portraitY }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >
          <motion.div
            className="photo-placeholder glass relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line"
            animate={reduce ? undefined : { rotate: [1.5, -1, 1.5] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/Profile_pic.png"
              alt={`${site.name} — portrait`}
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 80vw, 28rem"
              className="object-cover object-[center_12%] scale-[1.08]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/10" />
            <div className="absolute inset-5 z-10 flex flex-col justify-between rounded-[1.4rem] border border-white/10 p-5">
              <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/70">
                Portrait / 01
              </span>
              <div>
                <div className="mb-4 h-px w-full bg-white/15" />
                <p className="text-sm text-white/80">{site.name}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="glass absolute -bottom-6 -left-6 rounded-2xl px-5 py-4"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-ink-soft">Current focus</p>
            <p className="mt-1 font-medium text-ink">Production AI systems</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] uppercase tracking-[.2em] text-ink-soft md:block"
      >
        Scroll to discover ↓
      </motion.a>
    </section>
  );
}
