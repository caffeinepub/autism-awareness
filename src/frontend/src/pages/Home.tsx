import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Brain,
  Heart,
  Laptop,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  value,
  label,
  suffix = "",
  started,
}: { value: number; label: string; suffix?: string; started: boolean }) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="text-center">
      <p className="font-display font-black text-5xl md:text-6xl text-primary">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

const topics = [
  {
    icon: Brain,
    title: "About Autism",
    desc: "Understand what Autism Spectrum Disorder is, its types, causes, and early signs that help with timely diagnosis.",
    to: "/about" as const,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Why Awareness Matters",
    desc: "Learn why promoting autism awareness and acceptance creates more inclusive communities and better outcomes.",
    to: "/awareness" as const,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
  },
  {
    icon: Laptop,
    title: "Tech & Autism",
    desc: "Explore how modern technology from AAC devices to AI diagnostics is transforming autism support.",
    to: "/technology" as const,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
];

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsStarted(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <section className="hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            aria-hidden="true"
            className="absolute -top-20 -left-20 w-96 h-96 opacity-[0.06]"
            viewBox="0 0 200 200"
            fill="oklch(0.45 0.14 305)"
          >
            <title>Decorative puzzle piece</title>
            <path d="M80 20a20 20 0 0 1 40 0v10h30a10 10 0 0 1 10 10v30h10a20 20 0 0 1 0 40h-10v30a10 10 0 0 1-10 10h-30v10a20 20 0 0 1-40 0v-10H50a10 10 0 0 1-10-10v-30H30a20 20 0 0 1 0-40h10V40a10 10 0 0 1 10-10h30V20z" />
          </svg>
          <svg
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 w-80 h-80 opacity-[0.06]"
            viewBox="0 0 200 200"
            fill="oklch(0.55 0.13 240)"
          >
            <title>Decorative puzzle piece</title>
            <path d="M80 20a20 20 0 0 1 40 0v10h30a10 10 0 0 1 10 10v30h10a20 20 0 0 1 0 40h-10v30a10 10 0 0 1-10 10h-30v10a20 20 0 0 1-40 0v-10H50a10 10 0 0 1-10-10v-30H30a20 20 0 0 1 0-40h10V40a10 10 0 0 1 10-10h30V20z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4">
                World Autism Awareness Day &mdash; April 2
              </span>
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Understanding &amp; Supporting{" "}
                <span className="text-primary">Autistic Lives</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Autism affects millions of individuals worldwide. Through
                awareness, acceptance, and the right support, we can build an
                inclusive world where every person thrives.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8"
                  data-ocid="hero.primary_button"
                >
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 font-semibold rounded-full px-8"
                  data-ocid="hero.secondary_button"
                >
                  <Link to="/quiz">Take the Quiz</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="/assets/generated/hero-puzzle-autism-transparent.dim_600x500.png"
                alt="Colorful puzzle pieces representing autism spectrum diversity"
                className="max-w-sm w-full drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Explore Key Topics
            </h2>
            <p className="mt-3 text-muted-foreground">
              Dive into the areas that matter most for understanding autism
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`topics.item.${i + 1}`}
              >
                <Card className="h-full hover:shadow-card transition-shadow border-border">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${topic.iconBg} flex items-center justify-center mb-4`}
                    >
                      <topic.icon className={`w-6 h-6 ${topic.iconColor}`} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {topic.desc}
                    </p>
                    <Link
                      to={topic.to}
                      className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                      data-ocid="topics.link"
                    >
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cool-band py-20" ref={statsRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-center mb-14 tracking-tight"
          >
            Autism in Numbers
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <StatCard
              value={44}
              suffix=" children"
              label="1 in 44 children diagnosed in the US"
              started={statsStarted}
            />
            <StatCard
              value={5}
              suffix=".4M"
              label="Adults with autism in the United States"
              started={statsStarted}
            />
            <StatCard
              value={80}
              suffix="%"
              label="Unemployment rate among autistic adults"
              started={statsStarted}
            />
          </div>
        </div>
      </section>

      <section className="warm-band py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" /> Test Your Knowledge
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
              How much do you know about autism?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Take our 10-question quiz to learn fascinating facts and challenge
              your understanding.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-10 text-base"
              data-ocid="quiz_cta.primary_button"
            >
              <Link to="/quiz">
                Start the Quiz <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Community Support",
                desc: "Find resources, communities, and support networks for autistic individuals and caregivers.",
                iconColor: "text-primary",
                iconBg: "bg-primary/10",
              },
              {
                icon: TrendingUp,
                title: "Research & Progress",
                desc: "Stay updated on the latest research breakthroughs in autism diagnosis and intervention.",
                iconColor: "text-secondary",
                iconBg: "bg-secondary/10",
              },
              {
                icon: Heart,
                title: "Acceptance First",
                desc: "Moving beyond awareness to true acceptance, celebrating neurodiversity and unique strengths.",
                iconColor: "text-primary",
                iconBg: "bg-primary/10",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${item.iconBg} flex-shrink-0 flex items-center justify-center mt-1`}
                >
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
