"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navLinks, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6"
    >
      <div
        className={`mx-auto flex h-14 max-w-[90rem] items-center justify-between rounded-full border px-5 transition-all duration-500 md:px-6 ${
          scrolled || open
            ? "border-line bg-bg/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="focus-ring flex items-center gap-3 font-display text-sm font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs text-bg">
            DB
          </span>
          <span className="hidden sm:block">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring font-mono text-[11px] uppercase tracking-[.14em] text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.resume}
            download
            className="focus-ring rounded-full border border-line-strong px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-5 bg-ink transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-px w-5 bg-ink transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="glass mx-auto mt-3 max-w-[calc(100%-1.5rem)] rounded-3xl p-7 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring block font-display text-3xl font-semibold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                download
                className="focus-ring block font-display text-2xl text-accent"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
