import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Brain, Dna, Globe } from "lucide-react";
import { motion } from "motion/react";

const types = [
  {
    title: "Autistic Disorder",
    subtitle: "Classic Autism",
    desc: "The original diagnosis — includes significant challenges in language, social interaction, and repetitive behaviors. Often diagnosed in early childhood.",
    cardClass: "card-blue",
  },
  {
    title: "Asperger's Syndrome",
    subtitle: "High-Functioning Autism",
    desc: "Average or above-average intelligence, strong verbal skills, and social challenges. Now included under the ASD umbrella in DSM-5.",
    cardClass: "card-lavender",
  },
  {
    title: "PDD-NOS",
    subtitle: "Pervasive Developmental Disorder",
    desc: "Not Otherwise Specified. A partial presentation not fully meeting criteria for other diagnoses. Also now part of the ASD spectrum.",
    cardClass: "card-mint",
  },
];

const causes = [
  {
    icon: Dna,
    title: "Genetic Factors",
    desc: "Research shows autism has a strong genetic component. Mutations in certain genes and inherited traits can increase susceptibility.",
  },
  {
    icon: Globe,
    title: "Environmental Factors",
    desc: "Prenatal exposure to certain chemicals, air pollutants, or infections may interact with genetic predispositions.",
  },
  {
    icon: Brain,
    title: "Prenatal Factors",
    desc: "Advanced parental age, certain medications during pregnancy, and complications during birth are associated with higher autism risk.",
  },
];

const earlySignsChildren = [
  "No babbling by 12 months",
  "No meaningful words by 16 months",
  "No two-word phrases by 24 months",
  "Limited or no eye contact",
  "No response to name by 12 months",
  "Repetitive movements (hand-flapping, rocking)",
  "Extreme resistance to minor changes in routine",
  "Unusual or intense focus on specific objects",
  "Limited imaginative or pretend play",
  "Difficulty understanding others' feelings",
];

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
    >
      <path d="M80 20a20 20 0 0 1 40 0v10h30a10 10 0 0 1 10 10v30h10a20 20 0 0 1 0 40h-10v30a10 10 0 0 1-10 10h-30v10a20 20 0 0 1-40 0v-10H50a10 10 0 0 1-10-10v-30H30a20 20 0 0 1 0-40h10V40a10 10 0 0 1 10-10h30V20z" />
    </svg>
  );
}

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <PuzzlePiece className="absolute -right-12 -top-8 w-64 h-64 text-primary opacity-[0.05]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              About Autism
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Understanding Autism Spectrum Disorder — its definition, types,
              causes, and early signs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Autism */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-foreground">
                What is Autism?
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">
                  Autism Spectrum Disorder (ASD)
                </strong>{" "}
                is a complex neurodevelopmental condition characterized by
                differences in social communication, sensory processing, and
                behavior. The term "spectrum" reflects the wide variation in
                challenges and strengths each person possesses.
              </p>
              <p>
                Autism is not a disease but a different way of experiencing the
                world. Autistic individuals may have extraordinary skills in
                mathematics, music, memory, and pattern recognition, alongside
                challenges in social interaction and adapting to unexpected
                changes.
              </p>
              <p>
                According to the CDC, approximately{" "}
                <strong className="text-foreground">1 in 44 children</strong> in
                the United States is diagnosed with ASD. It occurs in all
                racial, ethnic, and socioeconomic groups, and is about 4 times
                more common among boys than girls.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types */}
      <section className="cool-band py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-2xl sm:text-3xl text-center mb-10 uppercase tracking-wide"
          >
            Types of Autism
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {types.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`types.item.${i + 1}`}
              >
                <div
                  className={`${type.cardClass} relative rounded-2xl p-6 min-h-[190px] overflow-hidden shadow-card`}
                >
                  <PuzzlePiece className="absolute -bottom-6 -right-6 w-24 h-24 text-white opacity-25 pointer-events-none" />
                  <h3 className="font-extrabold text-base uppercase tracking-wide text-foreground mb-1">
                    {type.title}
                  </h3>
                  <p className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-3">
                    {type.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-2xl sm:text-3xl text-center mb-10"
          >
            Causes of Autism
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {causes.map((cause, i) => (
              <motion.div
                key={cause.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cause.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2">{cause.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cause.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4"
          >
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> Vaccines do NOT cause autism. This has
              been thoroughly debunked by numerous large-scale scientific
              studies. The original study claiming a link was retracted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Early Signs */}
      <section className="warm-band py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-2xl sm:text-3xl text-center mb-10"
          >
            Early Signs in Children
          </motion.h2>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
            {earlySignsChildren.map((sign, i) => (
              <motion.div
                key={sign}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-xs border border-border"
              >
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground">{sign}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8 max-w-xl mx-auto">
            If you notice these signs in a child, consult a pediatrician or
            developmental specialist. Early intervention leads to significantly
            better outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}
