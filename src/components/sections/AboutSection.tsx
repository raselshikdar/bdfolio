import { User, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBadge from "@/components/SectionBadge";

const highlights = [
  { icon: GraduationCap, text: "B.Sc. in Computer Science — University of Dhaka" },
  { icon: Briefcase, text: "3+ Years in Full-Stack Development" },
  { icon: Heart, text: "Open-Source Contributor & Community Speaker" },
  { icon: MapPin, text: "Based in Dhaka, Bangladesh 🇧🇩" },
];

const AboutSection = () => (
  <section id="about" className="py-16">
    <div className="container mx-auto px-6 max-w-7xl">
      <SectionBadge label="About Me" title="My Journey" icon={User} />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <ScrollReveal delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              Growing up in Bangladesh, I was surrounded by rich artistry — from the intricate
              weaving of Jamdani to the vivid storytelling of Rickshaw art. These influences
              shaped how I approach technology: with attention to detail and a deep respect
              for craft.
            </p>
            <p>
              I specialize in building modern web applications that are fast, accessible, and
              delightful to use. My stack revolves around React, TypeScript, and Node.js, but
              I'm always exploring new horizons.
            </p>
            <p>
              When I'm not coding, you'll find me exploring local street food scenes, reading
              about design history, or contributing to open-source projects.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass rounded-2xl p-6 space-y-3">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Quick Highlights</h3>
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-foreground/80 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-primary" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
