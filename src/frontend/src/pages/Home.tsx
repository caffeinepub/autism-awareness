import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Globe,
  Heart,
  Puzzle,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

// SVG Puzzle piece shape component
function PuzzlePiece({
  className,
  style,
}: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={style}
      viewBox="0 0 200 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M80 20a20 20 0 0 1 40 0v10h30a10 10 0 0 1 10 10v30h10a20 20 0 0 1 0 40h-10v30a10 10 0 0 1-10 10h-30v10a20 20 0 0 1-40 0v-10H50a10 10 0 0 1-10-10v-30H30a20 20 0 0 1 0-40h10V40a10 10 0 0 1 10-10h30V20z" />
    </svg>
  );
}

const topicCards = [
  {
    icon: Brain,
    title: "WHAT IS AUTISM",
    desc: "Understand Autism Spectrum Disorder — its definition, characteristics, and how it shapes daily experiences.",
    to: "/about" as const,
    cardClass: "card-blue",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    title: "TYPES & SIGNS",
    desc: "Explore the different presentations of autism, early warning signs, and how to seek diagnosis and support.",
    to: "/about" as const,
    cardClass: "card-lavender",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "AWARENESS",
    desc: "Discover why autism awareness matters and how education, acceptance, and advocacy create real change.",
    to: "/awareness" as const,
    cardClass: "card-mint",
    iconColor: "text-foreground/60",
  },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* Oversized pastel puzzle shapes fading in from right */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <PuzzlePiece className="absolute -right-16 top-4 w-80 h-80 text-primary opacity-[0.06]" />
          <PuzzlePiece className="absolute right-48 -bottom-12 w-56 h-56 text-secondary opacity-[0.05]" />
          <PuzzlePiece className="absolute right-8 bottom-8 w-40 h-40 text-primary opacity-[0.04]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[520px] py-12 md:py-20">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-5">
                World Autism Awareness Day — April 2
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-5">
                Understanding
                <br />
                <span className="text-primary">Autism</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                Autism affects millions of individuals worldwide. Through
                awareness, acceptance, and the right support, we can build an
                inclusive world where every person thrives.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 shadow-sm"
                  data-ocid="hero.primary_button"
                >
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full px-8 shadow-sm"
                  data-ocid="hero.secondary_button"
                >
                  <Link to="/quiz">Take Quiz</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: visual block with puzzle pieces */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="hidden md:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Background card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/30" />

                {/* Colored puzzle grid */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 grid-rows-3 gap-4 p-8">
                    {[
                      "bg-primary/20",
                      "bg-secondary/30",
                      "bg-primary/30",
                      "bg-secondary/20",
                      "bg-muted",
                      "bg-secondary/25",
                      "bg-primary/25",
                      "bg-accent",
                      "bg-primary/15",
                    ].map((cls, i) => (
                      <motion.div
                        // biome-ignore lint/suspicious/noArrayIndexKey: decorative grid
                        key={i}
                        className={cls}
                        style={{ borderRadius: "12px" }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.3 + i * 0.06,
                          duration: 0.4,
                          ease: "backOut",
                        }}
                      >
                        <svg
                          viewBox="0 0 60 60"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-full h-full opacity-60"
                        >
                          <path d="M22 8a6 6 0 0 1 16 0v2h8a3 3 0 0 1 3 3v8h2a6 6 0 0 1 0 12h-2v8a3 3 0 0 1-3 3h-8v2a6 6 0 0 1-12 0v-2h-8a3 3 0 0 1-3-3v-8H8a6 6 0 0 1 0-12h7V11a3 3 0 0 1 3-3h4V8z" />
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating stat badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-5 py-3 border border-border"
                >
                  <p className="text-2xl font-extrabold text-primary">
                    1 in 44
                  </p>
                  <p className="text-xs text-muted-foreground">
                    children diagnosed
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card px-5 py-3 border border-border"
                >
                  <p className="text-2xl font-extrabold text-secondary">75M+</p>
                  <p className="text-xs text-muted-foreground">worldwide</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Topics ───────────────────────────── */}
      <section className="cool-band py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight uppercase">
              EXPLORE KEY TOPICS
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Start your journey to understanding autism
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {topicCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`topics.item.${i + 1}`}
              >
                <Link
                  to={card.to}
                  className="block group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                >
                  {/* Card gradient background */}
                  <div
                    className={`${card.cardClass} p-6 pb-8 min-h-[220px] relative`}
                  >
                    {/* Faint puzzle watermark */}
                    <PuzzlePiece className="absolute -bottom-6 -right-6 w-32 h-32 text-white opacity-30 pointer-events-none" />

                    <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center mb-4">
                      <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wider text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-bold text-foreground/60 group-hover:text-foreground transition-colors">
                      Read more <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Learning CTA ─────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <PuzzlePiece className="absolute -right-8 -top-8 w-48 h-48 text-primary opacity-[0.07] pointer-events-none" />
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                <Puzzle className="w-4 h-4" /> Interactive Learning
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                How much do you know about autism?
              </h2>
              <p className="text-muted-foreground">
                Take our 6-question quiz to test your knowledge and discover
                fascinating facts about autism.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 whitespace-nowrap flex-shrink-0"
              data-ocid="quiz_cta.primary_button"
            >
              <Link to="/quiz">
                Start Quiz <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Technology & Support ─────────────────── */}
      <section className="warm-band py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Technology &amp; Support
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Modern tools transforming autism support and awareness
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Diagnosis & Support Tools",
                desc: "AI-powered screening, AAC devices, and therapy apps that transform how autism is identified and supported.",
                to: "/technology" as const,
                iconColor: "text-primary",
                iconBg: "bg-primary/10",
              },
              {
                icon: Globe,
                title: "Community & Resources",
                desc: "Online platforms and communities connecting autistic individuals and families to guidance, help, and each other.",
                to: "/contact" as const,
                iconColor: "text-secondary",
                iconBg: "bg-secondary/10",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="block group bg-white rounded-2xl p-6 shadow-xs hover:shadow-card transition-shadow border border-border"
                  data-ocid={`support.item.${i + 1}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}
                  >
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
