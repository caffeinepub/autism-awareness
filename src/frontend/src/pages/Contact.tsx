import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email))
      errs.email = "Enter a valid email";
    if (!message.trim()) errs.message = "Message is required";
    else if (message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await actor?.submitContactForm(name, email, message);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent! We'll get back to you soon.");
    } catch (_) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Have questions about autism? Need guidance or resources? We're
              here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 cool-band">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-extrabold text-2xl mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're a parent seeking guidance, a professional looking
                for resources, or someone who wants to learn more about autism —
                we're here to support you on your journey.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Email Us</p>
                    <p className="text-muted-foreground text-sm">
                      support@autismawareness-hub.org
                    </p>
                    <p className="text-muted-foreground text-xs">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Helpline</p>
                    <p className="text-muted-foreground text-sm">
                      +1 (800) AUTISM-1
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Mon–Fri, 9am–5pm EST
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">Community</p>
                    <p className="text-muted-foreground text-sm">
                      Join our online support community
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Available 24/7 for peer support
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-white rounded-2xl border border-border">
                <p className="text-sm font-semibold mb-2">
                  💙 A supportive message
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "Every autistic person has a unique constellation of strengths
                  and challenges. Your questions are welcome here — no matter
                  where you are in your journey."
                </p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {success ? (
                <div
                  className="flex flex-col items-center justify-center bg-white rounded-2xl border border-border p-10 text-center h-full"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-extrabold text-xl mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Thank you for reaching out. We'll respond as soon as
                    possible.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary text-primary hover:bg-primary/10"
                    onClick={() => setSuccess(false)}
                    data-ocid="contact.secondary_button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-xs"
                  data-ocid="contact.panel"
                >
                  <h3 className="font-extrabold text-lg mb-5">
                    Send a Message
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Smith"
                        className={`rounded-xl ${errors.name ? "border-red-400" : ""}`}
                        data-ocid="contact.input"
                      />
                      {errors.name && (
                        <p
                          className="text-red-500 text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className={`rounded-xl ${errors.email ? "border-red-400" : ""}`}
                        data-ocid="contact.input"
                      />
                      {errors.email && (
                        <p
                          className="text-red-500 text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask us anything about autism, resources, or support..."
                        rows={5}
                        className={`rounded-xl ${errors.message ? "border-red-400" : ""}`}
                        data-ocid="contact.textarea"
                      />
                      {errors.message && (
                        <p
                          className="text-red-500 text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold"
                      disabled={loading}
                      data-ocid="contact.submit_button"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
