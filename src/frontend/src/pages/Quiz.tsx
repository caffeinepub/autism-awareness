import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  ChevronRight,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const questions = [
  {
    question: "What does ASD stand for?",
    options: [
      "Autism Spectrum Disorder",
      "Attention Spectrum Deficit",
      "Autistic Social Development",
      "Advanced Sensory Disorder",
    ],
    correct: 0,
  },
  {
    question:
      "Approximately how many children in the United States are diagnosed with autism?",
    options: ["1 in 100", "1 in 44", "1 in 200", "1 in 20"],
    correct: 1,
  },
  {
    question: "When is World Autism Awareness Day?",
    options: ["March 21", "May 5", "April 2", "January 15"],
    correct: 2,
  },
  {
    question: "Which of the following is TRUE about autism?",
    options: [
      "It is caused by vaccines",
      "It only affects children",
      "It is a spectrum disorder",
      "It can be cured with medication",
    ],
    correct: 2,
  },
  {
    question:
      "What does the puzzle piece symbol represent in autism awareness?",
    options: [
      "Autism is a puzzle to solve",
      "The complexity and diversity of autism",
      "A puzzle activity for therapy",
      "Missing pieces of society",
    ],
    correct: 1,
  },
  {
    question: "What is Augmentative and Alternative Communication (AAC)?",
    options: [
      "A type of autism medication",
      "Communication methods beyond speech such as devices and symbols",
      "A therapy exercise program",
      "An autism diagnosis test",
    ],
    correct: 1,
  },
];

type QuizState = "intro" | "playing" | "finished";

export default function Quiz() {
  const { actor } = useActor();
  const [state, setState] = useState<QuizState>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const progress = ((currentQ + (submitted ? 1 : 0)) / questions.length) * 100;

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleNext = async () => {
    if (selected === null) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = selected;
    setAnswers(newAnswers);
    setSubmitted(true);

    if (currentQ < questions.length - 1) {
      setTimeout(() => {
        setCurrentQ(currentQ + 1);
        setSelected(null);
        setSubmitted(false);
      }, 900);
    } else {
      const finalScore = newAnswers.filter(
        (a, i) => a === questions[i].correct,
      ).length;
      try {
        await actor?.submitQuizResult(
          BigInt(questions.length),
          BigInt(finalScore),
        );
      } catch (_) {
        // Silently ignore
      }
      setTimeout(() => setState("finished"), 900);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setState("intro");
  };

  const getResultMessage = (s: number) => {
    if (s >= 5)
      return {
        title: "Autism Expert!",
        emoji: "🏆",
        msg: "Outstanding! You have an excellent understanding of autism. Your knowledge can make a real difference!",
      };
    if (s >= 4)
      return {
        title: "Great Knowledge!",
        emoji: "⭐",
        msg: "You know a lot about autism! Keep exploring to deepen your understanding.",
      };
    if (s >= 2)
      return {
        title: "Good Start!",
        emoji: "👍",
        msg: "You have a solid foundation. Keep learning to become an autism advocate.",
      };
    return {
      title: "Keep Learning!",
      emoji: "📚",
      msg: "Every question is an opportunity to learn. Autism awareness starts with curiosity!",
    };
  };

  const finalScore = answers.filter(
    (a, i) => a === questions[i].correct,
  ).length;
  const result = getResultMessage(finalScore);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Autism Awareness Quiz
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Test your knowledge with 6 questions about autism. Learn as you
              play!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 cool-band min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <AnimatePresence mode="wait">
            {state === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
                data-ocid="quiz.panel"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-extrabold text-2xl mb-2">
                  Ready to Test Your Knowledge?
                </h2>
                <p className="text-muted-foreground mb-8">
                  6 questions · Multiple choice · Educational &amp; fun
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 font-semibold"
                  onClick={() => setState("playing")}
                  data-ocid="quiz.primary_button"
                >
                  Start Quiz
                </Button>
              </motion.div>
            )}

            {state === "playing" && (
              <motion.div
                key={`question-${currentQ}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                data-ocid="quiz.panel"
              >
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>
                      Question {currentQ + 1} of {questions.length}
                    </span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <Progress
                    value={progress}
                    className="h-2"
                    data-ocid="quiz.loading_state"
                  />
                </div>

                <Card className="mb-5 border-border shadow-card">
                  <CardContent className="p-6">
                    <h2 className="font-bold text-lg text-foreground">
                      {questions[currentQ].question}
                    </h2>
                  </CardContent>
                </Card>

                <div className="space-y-3 mb-6">
                  {questions[currentQ].options.map((opt, i) => {
                    const isCorrect = i === questions[currentQ].correct;
                    const isSelected = i === selected;
                    let cls =
                      "w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer ";
                    if (submitted) {
                      if (isCorrect)
                        cls += "border-green-500 bg-green-50 text-green-800";
                      else if (isSelected && !isCorrect)
                        cls += "border-red-400 bg-red-50 text-red-700";
                      else
                        cls += "border-border bg-white text-muted-foreground";
                    } else {
                      cls += isSelected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-white hover:border-primary/50 hover:bg-primary/5";
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        className={cls}
                        onClick={() => handleSelect(i)}
                        disabled={submitted}
                        data-ocid={`quiz.radio.${i + 1}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                            {submitted && isCorrect ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : submitted && isSelected && !isCorrect ? (
                              <XCircle className="w-5 h-5 text-red-500" />
                            ) : (
                              String.fromCharCode(65 + i)
                            )}
                          </span>
                          <span className="text-sm font-medium">{opt}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <Button
                  onClick={handleNext}
                  disabled={selected === null || submitted}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold"
                  data-ocid="quiz.submit_button"
                >
                  {currentQ === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {state === "finished" && (
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-card border border-border"
                data-ocid="quiz.success_state"
              >
                <div className="text-5xl mb-4">{result.emoji}</div>
                <h2 className="font-extrabold text-2xl mb-2">{result.title}</h2>
                <p className="font-extrabold text-5xl text-primary mb-1">
                  {finalScore}
                  <span className="text-xl text-muted-foreground">
                    /{questions.length}
                  </span>
                </p>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  {result.msg}
                </p>

                <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto mb-8">
                  {questions.map((q, i) => (
                    <div
                      key={q.question}
                      className={`flex items-center justify-center gap-1 text-xs p-2.5 rounded-xl ${
                        answers[i] === q.correct
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {answers[i] === q.correct ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )}
                      <span className="font-semibold">Q{i + 1}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary text-primary hover:bg-primary/10 font-semibold"
                  onClick={handleRestart}
                  data-ocid="quiz.secondary_button"
                >
                  <RotateCcw className="mr-2 w-4 h-4" /> Try Again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
