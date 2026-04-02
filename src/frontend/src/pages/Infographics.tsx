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

const milestones = [
  {
    year: "1943",
    title: "Kanner's First Description",
    desc: "Dr. Leo Kanner publishes the first systematic description of autism in 11 children.",
  },
  {
    year: "1944",
    title: "Asperger's Research",
    desc: "Hans Asperger independently describes 'autistic psychopathy' in Austrian children.",
  },
  {
    year: "1980",
    title: "DSM-III Inclusion",
    desc: "Infantile Autism is officially recognized in the DSM-III as a distinct diagnostic category.",
  },
  {
    year: "1994",
    title: "DSM-IV Expansion",
    desc: "Asperger Disorder and PDD-NOS added to DSM-IV, broadening the diagnosis spectrum.",
  },
  {
    year: "2007",
    title: "UN Awareness Day",
    desc: "United Nations designates April 2 as World Autism Awareness Day.",
  },
  {
    year: "2013",
    title: "DSM-5 Unification",
    desc: "All autism diagnoses consolidated under 'Autism Spectrum Disorder' in DSM-5.",
  },
  {
    year: "2020",
    title: "AI Diagnostics",
    desc: "AI-powered tools begin assisting in early autism screening, improving detection rates.",
  },
  {
    year: "2024",
    title: "Growing Advocacy",
    desc: "Neurodiversity movement gains mainstream recognition, promoting acceptance and inclusion.",
  },
];

const spectrumExperiences = [
  {
    label: "Non-speaking",
    colorClass: "bg-primary",
    widthPct: 25,
    example: "May use AAC devices or sign language to communicate",
  },
  {
    label: "Minimally verbal",
    colorClass: "bg-primary/70",
    widthPct: 40,
    example: "Uses single words or short phrases",
  },
  {
    label: "Verbally fluent",
    colorClass: "bg-secondary/80",
    widthPct: 60,
    example: "Communicates verbally but may struggle with social cues",
  },
  {
    label: "Highly articulate",
    colorClass: "bg-secondary",
    widthPct: 100,
    example: "Articulate, often misunderstood as 'not autistic'",
  },
];

const animatedStats = [
  {
    value: 44,
    suffix: " in 1",
    label: "Children diagnosed in US",
    desc: "CDC 2022 estimate",
  },
  {
    value: 75,
    suffix: "M+",
    label: "People worldwide with autism",
    desc: "Across all ages",
  },
  {
    value: 80,
    suffix: "%",
    label: "Unemployment rate",
    desc: "Among autistic adults",
  },
  {
    value: 17,
    suffix: " mo",
    label: "Average diagnosis delay",
    desc: "After parents first notice signs",
  },
  {
    value: 3,
    suffix: "x",
    label: "More likely to be bullied",
    desc: "Than neurotypical peers",
  },
  {
    value: 40,
    suffix: "%",
    label: "Have average or above-average IQ",
    desc: "Debunking stereotypes",
  },
];

function AnimatedStatCard({
  stat,
  started,
}: { stat: (typeof animatedStats)[0]; started: boolean }) {
  const count = useCountUp(stat.value, 1800, started);
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card text-center">
      <p className="font-display font-black text-4xl text-primary">
        {count}
        {stat.suffix}
      </p>
      <p className="font-semibold mt-2 text-sm">{stat.label}</p>
      <p className="text-muted-foreground text-xs mt-1">{stat.desc}</p>
    </div>
  );
}

export default function Infographics() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsStarted(true);
      },
      { threshold: 0.2 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
              Infographics
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visual data and interactive charts to understand the autism
              landscape at a glance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white" ref={statsRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-center mb-12"
          >
            Autism at a Glance
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animatedStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`stats.item.${i + 1}`}
              >
                <AnimatedStatCard stat={stat} started={statsStarted} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cool-band py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-center mb-12"
          >
            Autism Research Timeline
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex gap-4 md:gap-0 items-start md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  data-ocid={`timeline.item.${i + 1}`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="bg-white rounded-xl p-4 shadow-xs hover:shadow-card transition-shadow">
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                        {m.year}
                      </span>
                      <h3 className="font-display font-bold text-base mt-1">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-primary border-4 border-white shadow-xs z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-4">
              The Spectrum
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Autism is not a linear spectrum from "mild" to "severe" &mdash;
              it's a multidimensional set of experiences. Here's a simplified
              look at communication diversity.
            </p>
            <div className="space-y-4">
              {spectrumExperiences.map((exp, i) => (
                <motion.div
                  key={exp.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-32 text-right text-sm font-semibold text-foreground flex-shrink-0">
                    {exp.label}
                  </div>
                  <div className="flex-1">
                    <div className="h-8 bg-muted rounded-lg overflow-hidden">
                      <motion.div
                        className={`h-full ${exp.colorClass} rounded-lg flex items-center px-3`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${exp.widthPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      >
                        <span className="text-white text-xs font-medium truncate">
                          {exp.example}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center italic">
              Note: This is a simplified representation. Every autistic person's
              experience is unique and multifaceted.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
