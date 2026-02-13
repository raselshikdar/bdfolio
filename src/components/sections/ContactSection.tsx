import { useState } from "react";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree or mailto fallback
    window.location.href = `mailto:your@email.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-24 jamdani-pattern-strong">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2 text-center">
            Let's Connect
          </p>
          <h2 className="text-4xl font-bold font-serif text-foreground mb-12 text-center">
            Get in Touch
          </h2>
        </ScrollReveal>

        <div className="max-w-xl mx-auto">
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5 shadow-lg">
              <div>
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-3"
              >
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </form>
          </ScrollReveal>

          {/* Social icons */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-6 mt-10">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com", label: "X" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground mt-16">
            © {new Date().getFullYear()} Your Name. Crafted with ❤️ from Bangladesh.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
