import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Globe, Heart, Lightbulb, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const statCards = [
  {
    value: "~75 million",
    label: "People with autism worldwide",
    color: "card-blue",
  },
  {
    value: "1 in 44",
    label: "Children diagnosed with ASD in the US",
    color: "card-lavender",
  },
  {
    value: "80%",
    label: "Unemployment rate among autistic adults",
    color: "card-mint",
  },
  {
    value: "April 2",
    label: "World Autism Awareness Day (est. 2007)",
    color: "card-blue",
  },
];

const keyFacts = [
  {
    icon: Globe,
    text: "Autism is found in every country, culture, and socioeconomic background.",
  },
  {
    icon: Users,
    text: "1 in 44 children in the U.S. is diagnosed with ASD, up from 1 in 150 in 2000.",
  },
  {
    icon: Lightbulb,
    text: "Many autistic people have exceptional abilities in memory, math, music, and art.",
  },
  {
    icon: Heart,
    text: "Early diagnosis and intervention can significantly improve quality of life.",
  },
  {
    icon: Star,
    text: "Autistic individuals have a 7× higher risk of anxiety and depression without support.",
  },
  {
    icon: Calendar,
    text: "April 2 is World Autism Awareness Day, established by the UN in 2007.",
  },
];

function PuzzlePiece({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 200 200"
      fill="currentColor"
    >
      <path d="M80 20a20 20 0 0 1 40 0v10h30a10 10 0 0 1 10 10v30h10a20 20 0 0 1 0 40h-10v30a10 10 0 0 1-10 10h-30v10a20 20 0 0 1-40 0v-10H50a10 10 0 0 1-10-10v-30H30a20 20 0 0 1 0-40h10V40a10 10 0 0 1 10-10h30V20z" />
    </svg>
  );
}

export default function Awareness() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <PuzzlePiece className="absolute -right-12 -top-8 w-64 h-64 text-secondary opacity-[0.05]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Why Awareness Matters
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Understanding autism is the first step toward building a more
              inclusive and supportive world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-extrabold text-2xl sm:text-3xl mb-5">
              The Importance of Autism Awareness
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Autism awareness goes beyond simply knowing what autism is. It
                means understanding the daily experiences of autistic
                individuals and their families — the challenges they face in
                accessing education, employment, healthcare, and social
                inclusion.
              </p>
              <p>
                When communities are aware, they can create{" "}
                <strong className="text-foreground">
                  sensory-friendly spaces
                </strong>
                , employ autistic individuals, and design educational programs
                that accommodate diverse learning styles. Awareness reduces
                stigma, prevents bullying, and fosters genuine acceptance.
              </p>
              <p>
                For families, awareness means faster diagnosis, access to early
                intervention, and finding community support. For autistic
                individuals, it means being seen, valued, and given equal
                opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="cool-band py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-2xl sm:text-3xl text-center mb-10 uppercase tracking-wide"
          >
            Key Facts at a Glance
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`stats.item.${i + 1}`}
              >
                <div
                  className={`${stat.color} relative rounded-2xl p-6 text-center overflow-hidden shadow-card`}
                >
                  <PuzzlePiece className="absolute -bottom-4 -right-4 w-20 h-20 text-white opacity-25 pointer-events-none" />
                  <p className="font-extrabold text-2xl text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Autism Awareness Day */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-secondary" />
                <h2 className="font-extrabold text-2xl">
                  World Autism Awareness Day
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established by the United Nations in 2007, April 2 is observed
                globally to raise awareness about autism and promote the rights
                and inclusion of autistic individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each year, landmarks worldwide are lit up in blue. Organizations
                host educational events, walks, and advocacy campaigns
                throughout April — Autism Awareness Month.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted rounded-2xl p-7 border border-border">
                <h3 className="font-bold text-lg mb-5 text-secondary">
                  Awareness vs. Acceptance
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-sm">Awareness</p>
                    <p className="text-muted-foreground text-sm">
                      Knowing that autism exists and understanding its basic
                      characteristics.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-semibold text-sm">Acceptance</p>
                    <p className="text-muted-foreground text-sm">
                      Embracing neurodiversity, creating inclusive spaces, and
                      valuing autistic contributions.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    Many advocates prefer "Autism Acceptance Month" to emphasize
                    moving beyond awareness to genuine inclusion.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Facts Grid */}
      <section className="warm-band py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-2xl sm:text-3xl text-center mb-10"
          >
            Key Facts
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {keyFacts.map((fact, i) => (
              <motion.div
                key={fact.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`facts.item.${i + 1}`}
              >
                <Card className="h-full hover:shadow-card transition-shadow border-border">
                  <CardContent className="p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {fact.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
