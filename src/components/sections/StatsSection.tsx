import { useEffect, useRef, useState } from "react";
import { Briefcase, Code2, FolderOpen, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { label: "Projects Done", value: 50, suffix: "+", icon: FolderOpen },
  { label: "Years Experience", value: 3, suffix: "+", icon: Briefcase },
  { label: "Technologies", value: 20, suffix: "+", icon: Code2 },
  { label: "Happy Clients", value: 30, suffix: "+", icon: Users },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = target / (duration / 16);
          const id = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(id);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const StatsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2 text-center">
          By the Numbers
        </p>
        <h2 className="text-4xl font-bold font-serif text-foreground mb-16 text-center">
          Quick Stats
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const { count, ref } = useCountUp(stat.value);
          return (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div
                ref={ref}
                className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <stat.icon className="mx-auto text-primary mb-4" size={32} strokeWidth={1.5} />
                <p className="text-4xl md:text-5xl font-bold font-serif text-foreground">
                  {count}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default StatsSection;
