import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Globe,
  HeartHandshake,
  Mic2,
  Smartphone,
  Users,
  Watch,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const techCategories = [
  {
    icon: Mic2,
    title: "AAC Devices",
    subtitle: "Augmentative & Alternative Communication",
    desc: "For non-speaking or minimally-verbal autistic individuals, AAC devices provide a voice. From picture boards to sophisticated speech-generating tablets, these tools bridge communication gaps and empower self-expression.",
    examples: [
      "Proloquo2Go",
      "TouchChat",
      "LAMP Words for Life",
      "Snap Core First",
    ],
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-t-primary",
  },
  {
    icon: Smartphone,
    title: "Therapy Apps",
    subtitle: "Digital Therapeutic Tools",
    desc: "Mobile applications have revolutionized access to speech therapy, behavioral therapy, and skill-building. Gamified approaches make learning engaging and accessible from home.",
    examples: ["AutiSpark", "Otsimo", "ABA Flash Cards", "See.Touch.Learn"],
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-t-secondary",
  },
  {
    icon: Brain,
    title: "AI Diagnostics",
    subtitle: "Artificial Intelligence in Screening",
    desc: "Machine learning algorithms can analyze eye-tracking patterns, facial expressions, and behavioral data to assist clinicians in earlier autism identification, potentially before age 2.",
    examples: ["Cognoa", "EarliTec Dx", "Autism&Beyond (Duke)", "SenseToKnow"],
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-t-primary",
  },
  {
    icon: Users,
    title: "Social Skills Apps",
    subtitle: "Building Social Understanding",
    desc: "Interactive apps that teach facial expression recognition, conversation skills, emotional regulation, and social scenarios through visual, step-by-step guidance.",
    examples: [
      "Social Story Creator",
      "Model Me Kids",
      "Emotion Zone",
      "ZavaLab",
    ],
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-t-secondary",
  },
  {
    icon: Watch,
    title: "Wearable Technology",
    subtitle: "Smart Devices for Autism Support",
    desc: "Smartwatches and biosensors can detect stress levels, prompt social interactions, track routines, and alert caregivers during meltdowns providing real-time personalized support.",
    examples: [
      "Embrace2 Watch",
      "SADbot Bracelet",
      "QSTwatch",
      "Garmin Health API",
    ],
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-t-primary",
  },
  {
    icon: Globe,
    title: "Online Communities",
    subtitle: "Digital Support Networks",
    desc: "Virtual communities connect autistic individuals with peers, mentors, and resources worldwide. Online spaces reduce isolation and provide a platform for self-advocacy and community building.",
    examples: [
      "Autism Speaks Community",
      "ASAN Network",
      "Reddit r/autism",
      "Wrong Planet",
    ],
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderColor: "border-t-secondary",
  },
];

const futureAreas = [
  {
    icon: Zap,
    title: "VR Social Simulations",
    desc: "Virtual reality environments for safe practice of social interactions and sensory desensitization.",
  },
  {
    icon: Brain,
    title: "Neuroimaging AI",
    desc: "Deep learning analysis of brain scans to identify autism biomarkers earlier and more accurately.",
  },
  {
    icon: HeartHandshake,
    title: "Emotion-Reading Robots",
    desc: "Social robots like NAO and Kaspar that teach emotional recognition through repetitive, patient interaction.",
  },
];

export default function Technology() {
  return (
    <div>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
              Technology &amp; Autism
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              How modern technology is transforming autism support, diagnosis,
              communication, and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Technology has become one of the most powerful allies in autism
              support. From AAC devices that give voice to non-speaking
              individuals, to AI tools that enable earlier diagnosis, innovation
              is closing gaps and opening doors for autistic people worldwide.
            </p>
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
            Key Technology Areas
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`tech.item.${i + 1}`}
              >
                <Card
                  className={`h-full border-t-4 ${tech.borderColor} hover:shadow-card transition-shadow`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${tech.iconBg} flex items-center justify-center mb-4`}
                    >
                      <tech.icon className={`w-6 h-6 ${tech.iconColor}`} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-1">
                      {tech.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3">
                      {tech.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {tech.desc}
                    </p>
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                        Examples:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.examples.map((ex) => (
                          <span
                            key={ex}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            The Future of Autism Tech
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {futureAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-card transition-shadow text-center"
                data-ocid={`future.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
