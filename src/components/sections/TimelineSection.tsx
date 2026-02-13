import ScrollReveal from "@/components/ScrollReveal";

interface TimelineItem {
  year: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "work";
}

const items: TimelineItem[] = [
  { year: "2024 – Present", title: "Senior Frontend Engineer", org: "Tech Corp", description: "Leading the frontend architecture for a SaaS platform serving 100K+ users.", type: "work" },
  { year: "2022 – 2024", title: "Full-Stack Developer", org: "StartupXYZ", description: "Built and shipped multiple products from zero to production using React & Node.js.", type: "work" },
  { year: "2021 – 2022", title: "Junior Developer", org: "Agency Co.", description: "Developed responsive websites and web applications for diverse clients.", type: "work" },
  { year: "2017 – 2021", title: "B.Sc. in Computer Science", org: "University of Dhaka", description: "Graduated with honors. Focused on algorithms, data structures, and web technologies.", type: "education" },
];

const TimelineSection = () => (
  <section id="experience" className="py-16 jamdani-pattern">
    <div className="container mx-auto px-6 max-w-7xl">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
          Experience & Education
        </p>
        <h2 className="text-3xl font-bold font-serif text-foreground mb-12">
          My Timeline
        </h2>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

        <div className="space-y-8">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent border-4 border-background z-10 mt-5" />
                <div className="hidden md:block md:w-1/2" />
                <div className="ml-12 md:ml-0 md:w-1/2 glass rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-0.5">{item.org}</p>
                  <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
