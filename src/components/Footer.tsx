import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line py-10">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="focus-ring flex items-center gap-3 font-display text-sm font-semibold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs text-bg">DB</span>
          {site.name}
        </a>
        <p className="text-sm text-ink-soft">
          © {year} — Designed to move. Built to last.
        </p>
      </div>
    </footer>
  );
}
