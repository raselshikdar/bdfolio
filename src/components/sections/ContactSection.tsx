import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:your@email.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-16 jamdani-pattern-strong">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2 text-center">
            Let's Connect
          </p>
          <h2 className="text-3xl font-bold font-serif text-foreground mb-10 text-center">
            Get in Touch
          </h2>
        </ScrollReveal>

        <div className="max-w-lg mx-auto">
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4 shadow-lg">
              {/* Floating label inputs */}
              {[
                { key: "name", label: "Your Name", type: "text" },
                { key: "email", label: "Your Email", type: "email" },
              ].map(({ key, label, type }) => (
                <div key={key} className="relative">
                  <input
                    type={type}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="peer w-full bg-background/50 border border-input rounded-lg px-4 pt-5 pb-2 text-sm text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={label}
                    id={`contact-${key}`}
                  />
                  <label
                    htmlFor={`contact-${key}`}
                    className="absolute left-4 top-2 text-[10px] font-medium text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary"
                  >
                    {label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="peer w-full bg-background/50 border border-input rounded-lg px-4 pt-5 pb-2 text-sm text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Your Message"
                  id="contact-message"
                />
                <label
                  htmlFor="contact-message"
                  className="absolute left-4 top-2 text-[10px] font-medium text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-primary"
                >
                  Your Message
                </label>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-3 text-sm font-semibold"
                >
                  <Send size={14} className="mr-2" /> Send Message
                </Button>
              </motion.div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
