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

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-16">
    <div className="container mx-auto px-6 max-w-7xl">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
          What I Work With
        </p>
        <h2 className="text-3xl font-bold font-serif text-foreground mb-10">
          Skills & Technologies
        </h2>
      </ScrollReveal>
    </div>

    {/* Marquee */}
    <ScrollReveal>
      <div className="overflow-hidden py-6 bg-primary/5">
        <div className="flex animate-marquee w-max gap-16 px-8">
          {[...marqueeIcons, ...marqueeIcons].map((Icon, i) => (
            <Icon key={i} className="text-primary/40" size={36} strokeWidth={1.5} />
          ))}
        </div>
      </div>
    </ScrollReveal>

    {/* Categorized skill chips */}
    <div className="container mx-auto px-6 max-w-7xl mt-10">
      <div className="grid sm:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <ScrollReveal key={cat.title}>
            <div className="glass rounded-xl p-5">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
