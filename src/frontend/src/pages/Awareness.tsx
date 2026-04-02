import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Globe, Heart, Lightbulb, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const globalStats = [
  { label: "People with autism worldwide", value: "~75 million", pct: 80 },
  { label: "Diagnosed before age 4", value: "Only 40%", pct: 40 },
  { label: "Countries with autism strategy", value: "Less than 50%", pct: 45 },
  { label: "Autistic adults employed", value: "Only 20%", pct: 20 },
  { label: "Families impacted globally", value: "1 in 3", pct: 33 },
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
    text: "Autistic individuals have a 7x higher risk of anxiety and depression without support.",
  },
  {
    icon: Calendar,
    text: "April 2 is World Autism Awareness Day, established by the UN in 2007.",
  },
];

export default function Awareness() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
              Why Awareness Matters
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding autism is the first step toward building a more
              inclusive and supportive world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl mb-6">
              The Importance of Autism Awareness
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Autism awareness goes beyond simply knowing what autism is. It
                means understanding the daily experiences of autistic
                individuals and their families &mdash; the challenges they face
                in accessing education, employment, healthcare, and social
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

      <section className="cool-band py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-center mb-12"
          >
            Global Statistics
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {globalStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">
                    {stat.label}
                  </span>
                  <span className="font-bold text-primary">{stat.value}</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.pct}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-center mb-12"
          >
            Key Facts
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keyFacts.map((fact, i) => (
              <motion.div
                key={fact.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`facts.item.${i + 1}`}
              >
                <Card className="h-full hover:shadow-card transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
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

      <section className="warm-band py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-secondary" />
                <h2 className="font-display font-bold text-3xl">
                  World Autism Awareness Day
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established by the United Nations in 2007, April 2 is observed
                globally to raise awareness about autism and promote the rights
                and inclusion of autistic individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each year, landmarks worldwide are lit up in blue to show
                support. Organizations host educational events, walks, and
                advocacy campaigns throughout April &mdash; Autism Awareness
                Month.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-display font-bold text-xl mb-4 text-secondary">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-center">
              Impact on Families
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              Autism affects not just the individual but the entire family unit
              &mdash; parents, siblings, and extended family.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Emotional Toll",
                  desc: "Parents often experience grief, stress, and burnout. Support groups and respite care are vital resources.",
                },
                {
                  title: "Financial Burden",
                  desc: "Families spend an average of $60,000+ annually on autism-related expenses including therapy and care.",
                },
                {
                  title: "Sibling Experience",
                  desc: "Siblings may feel overlooked or take on caregiver roles. Family counseling helps balance these dynamics.",
                },
                {
                  title: "Community Support",
                  desc: "Strong community networks reduce isolation and provide practical help for day-to-day challenges.",
                },
              ].map((item, i) => (
                <Card
                  key={item.title}
                  className="hover:shadow-card transition-shadow"
                  data-ocid={`impact.item.${i + 1}`}
                >
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
