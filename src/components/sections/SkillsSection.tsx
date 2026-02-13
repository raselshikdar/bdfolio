import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Code2, Database, Globe, Laptop, Server, Smartphone,
  Layout, GitBranch, Cloud, Terminal, Palette, Boxes
} from "lucide-react";

const marqueeIcons = [
  Code2, Database, Globe, Laptop, Server, Smartphone,
  Layout, GitBranch, Cloud, Terminal, Palette, Boxes,
];

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
  "Tailwind CSS", "Docker", "AWS", "GraphQL", "MongoDB", "Git",
  "Figma", "REST APIs", "CI/CD", "Linux",
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
          What I Work With
        </p>
        <h2 className="text-4xl font-bold font-serif text-foreground mb-12">
          Skills & Technologies
        </h2>
      </ScrollReveal>
    </div>

    {/* Marquee */}
    <ScrollReveal>
      <div className="overflow-hidden py-8 bg-primary/5">
        <div className="flex animate-marquee w-max gap-16 px-8">
          {[...marqueeIcons, ...marqueeIcons].map((Icon, i) => (
            <Icon key={i} className="text-primary/40" size={40} strokeWidth={1.5} />
          ))}
        </div>
      </div>
    </ScrollReveal>

    {/* Skill chips */}
    <div className="container mx-auto px-6 mt-12">
      <ScrollReveal>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SkillsSection;
