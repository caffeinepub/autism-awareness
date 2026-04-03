import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

function PuzzleBg() {
  return (
    <svg
      aria-hidden="true"
      className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none"
      viewBox="0 0 200 200"
      fill="currentColor"
    >
      <path d="M80 20a20 20 0 0 1 40 0v10h30a10 10 0 0 1 10 10v30h10a20 20 0 0 1 0 40h-10v30a10 10 0 0 1-10 10h-30v10a20 20 0 0 1-40 0v-10H50a10 10 0 0 1-10-10v-30H30a20 20 0 0 1 0-40h10V40a10 10 0 0 1 10-10h30V20z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      <PuzzleBg />
      <div className="container mx-auto px-4 sm:px-6 py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-primary"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path d="M16 6a4 4 0 0 1 8 0v2h6a2 2 0 0 1 2 2v6h2a4 4 0 0 1 0 8h-2v6a2 2 0 0 1-2 2h-6v2a4 4 0 0 1-8 0v-2h-6a2 2 0 0 1-2-2v-6H6a4 4 0 0 1 0-8h2V10a2 2 0 0 1 2-2h6V6z" />
              </svg>
              <span className="font-bold text-base tracking-tight">
                Autism Awareness Hub
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Promoting understanding, acceptance, and support for autistic
              individuals and their families worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest text-white/40">
              Learn
            </h4>
            <ul className="space-y-2">
              {(
                [
                  ["Home", "/"],
                  ["About Autism", "/about"],
                  ["Awareness", "/awareness"],
                ] as [string, string][]
              ).map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest text-white/40">
              Explore
            </h4>
            <ul className="space-y-2">
              {(
                [
                  ["Quiz", "/quiz"],
                  ["Technology", "/technology"],
                  ["Contact", "/contact"],
                ] as [string, string][]
              ).map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest text-white/40">
              Key Dates
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-white/60">
                🌍 April 2 — World Autism Awareness Day
              </p>
              <p className="text-sm text-white/60">
                💙 April — Autism Acceptance Month
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/40">
            &copy; {year}. Built with{" "}
            <Heart className="inline w-3 h-3 text-red-400" /> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-white/30">
            Spreading awareness, one puzzle piece at a time
          </p>
        </div>
      </div>
    </footer>
  );
}
