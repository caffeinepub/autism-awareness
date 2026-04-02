import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-3">
              Autism Awareness Hub
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Promoting understanding, acceptance, and support for autistic
              individuals and their families worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-widest text-white/50">
              Pages
            </h4>
            <ul className="space-y-2">
              {(
                [
                  ["Home", "/"],
                  ["About Autism", "/about"],
                  ["Awareness", "/awareness"],
                  ["Infographics", "/infographics"],
                ] as [string, string][]
              ).map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-widest text-white/50">
              Resources
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
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
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
            World Autism Awareness Day &mdash; April 2
          </p>
        </div>
      </div>
    </footer>
  );
}
