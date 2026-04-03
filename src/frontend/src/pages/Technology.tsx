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

const techCards = [
  {
    icon: Mic2,
    title: "AAC DEVICES",
    subtitle: "Augmentative & Alternative Communication",
    desc: "For non-speaking or minimally-verbal individuals, AAC devices provide a voice. From picture boards to speech-generating tablets, these tools bridge communication gaps.",
    examples: ["Proloquo2Go", "TouchChat", "Snap Core First"],
    cardClass: "card-blue",
    iconColor: "text-secondary",
  },
  {
    icon: Smartphone,
    title: "THERAPY APPS",
    subtitle: "Digital Therapeutic Tools",
    desc: "Mobile apps have revolutionized access to speech therapy, behavioral therapy, and skill-building. Gamified approaches make learning engaging and accessible from home.",
    examples: ["AutiSpark", "Otsimo", "ABA Flash Cards"],
    cardClass: "card-lavender",
    iconColor: "text-primary",
  },
  {
    icon: Brain,
    title: "AI DIAGNOSTICS",
    subtitle: "Artificial Intelligence in Screening",
    desc: "Machine learning algorithms analyze eye-tracking, facial expressions, and behavioral data to assist clinicians in earlier autism identification — potentially before age 2.",
    examples: ["Cognoa", "EarliTec Dx", "SenseToKnow"],
    cardClass: "card-mint",
    iconColor: "text-[oklch(0.45_0.15_175)]",
  },
  {
    icon: Watch,
    title: "WEARABLES",
    subtitle: "Smart Devices for Autism Support",
    desc: "Smartwatches and biosensors can detect stress levels, prompt social interactions, track routines, and alert caregivers — providing real-time personalized support.",
    examples: ["Embrace2 Watch", "QSTwatch", "Garmin Health"],
    cardClass: "card-blue",
    iconColor: "text-secondary",
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
    title: "Social Robots",
    desc: "Robots like NAO and Kaspar teach emotional recognition through repetitive, patient interaction.",
  },
  {
    icon: Users,
    title: "Online Communities",
    desc: "Virtual communities connect autistic individuals with peers, mentors, and global resources.",
  },
  {
    icon: Globe,
    title: "Telehealth Access",
    desc: "Remote therapy and diagnosis making specialist care accessible in underserved regions worldwide.",
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

export default function Technology() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <PuzzlePiece className="absolute -right-12 -top-8 w-64 h-64 text-primary opacity-[0.05]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Technology &amp; Autism
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              How modern technology is transforming autism support, diagnosis,
              communication, and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed text-center"
          >
            Technology has become one of the most powerful allies in autism
            support. From AAC devices that give voice to non-speaking
            individuals, to AI tools that enable earlier diagnosis, innovation
            is closing gaps and opening doors for autistic people worldwide.
          </motion.p>
        </div>
      </section>

      {/* Main Tech Cards */}
      <section className="cool-band py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-2xl sm:text-3xl text-center mb-10 uppercase tracking-wide"
          >
            KEY TECHNOLOGY AREAS
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techCards.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`tech.item.${i + 1}`}
              >
                <div
                  className={`${tech.cardClass} relative rounded-2xl p-6 min-h-[260px] overflow-hidden shadow-card`}
                >
                  <PuzzlePiece className="absolute -bottom-6 -right-6 w-28 h-28 text-white opacity-25 pointer-events-none" />
                  <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center mb-4">
                    <tech.icon className={`w-5 h-5 ${tech.iconColor}`} />
                  </div>
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-foreground mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                    {tech.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {tech.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs bg-white/60 text-foreground/70 px-2 py-0.5 rounded-full font-medium"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-2xl sm:text-3xl text-center mb-10"
          >
            The Future of Autism Tech
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {futureAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-muted rounded-2xl p-5 text-center hover:shadow-card transition-shadow border border-border"
                data-ocid={`future.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-3">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-1.5">{area.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
