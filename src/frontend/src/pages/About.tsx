import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Brain, Dna, Globe } from "lucide-react";
import { motion } from "motion/react";

const types = [
  {
    title: "ASD Level 1",
    subtitle: "Requiring Support",
    desc: "Individuals need some support. May experience social difficulties and inflexible behavior but can often live independently.",
    borderColor: "border-t-primary",
  },
  {
    title: "ASD Level 2",
    subtitle: "Requiring Substantial Support",
    desc: "More pronounced deficits in social communication. Inflexible behaviors are noticeable and interfere with daily function.",
    borderColor: "border-t-secondary",
  },
  {
    title: "ASD Level 3",
    subtitle: "Requiring Very Substantial Support",
    desc: "Severe deficits in communication and social skills. Limited initiation of social interaction and minimal response to others.",
    borderColor: "border-t-primary",
  },
  {
    title: "Asperger's Syndrome",
    subtitle: "Now part of ASD",
    desc: "Previously a separate diagnosis. Characterized by average or above-average intelligence, strong verbal skills, and social challenges.",
    borderColor: "border-t-secondary",
  },
  {
    title: "PDD-NOS",
    subtitle: "Pervasive Developmental Disorder",
    desc: "Not Otherwise Specified, a partial presentation not fully meeting criteria for other diagnoses. Now included in the ASD umbrella.",
    borderColor: "border-t-primary",
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

export default function About() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
              About Autism
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding Autism Spectrum Disorder &mdash; its definition,
              types, causes, and early signs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display font-bold text-3xl">
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
                  Autism is not a disease but a different way of experiencing
                  the world. Autistic individuals may have extraordinary skills
                  in areas like mathematics, music, memory, and pattern
                  recognition, alongside challenges in social interaction and
                  adapting to unexpected changes.
                </p>
                <p>
                  According to the CDC, approximately{" "}
                  <strong className="text-foreground">1 in 44 children</strong>{" "}
                  in the United States is diagnosed with ASD. It occurs in all
                  racial, ethnic, and socioeconomic groups, and is about 4 times
                  more common among boys than girls.
                </p>
              </div>
            </motion.div>
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
            Types of Autism
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`types.item.${i + 1}`}
              >
                <Card
                  className={`h-full border-t-4 ${type.borderColor} hover:shadow-card transition-shadow`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-display font-bold text-xl mb-1">
                      {type.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3">
                      {type.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {type.desc}
                    </p>
                  </CardContent>
                </Card>
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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cause.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {cause.title}
                </h3>
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
            className="mt-10 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4"
          >
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> Vaccines do NOT cause autism. This has
              been thoroughly debunked by numerous large-scale scientific
              studies. The original study suggesting a link was retracted and
              its author lost his medical license.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="warm-band py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-center mb-12"
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
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 shadow-xs"
              >
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground">{sign}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8 max-w-xl mx-auto">
            If you notice these signs in a child, consult a pediatrician or
            developmental specialist for a proper evaluation. Early intervention
            leads to significantly better outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}
