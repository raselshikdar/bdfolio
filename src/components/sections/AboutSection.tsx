import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
          About Me
        </p>
        <h2 className="text-4xl font-bold font-serif text-foreground mb-12">
          My Journey
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={0.1}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
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
          <div className="glass rounded-2xl p-8 space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-foreground">Quick Highlights</h3>
            <ul className="space-y-3">
              {[
                "🎓 Computer Science Graduate",
                "💼 3+ Years in Full-Stack Development",
                "🌍 Open-Source Contributor",
                "🇧🇩 Proudly Bangladeshi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
