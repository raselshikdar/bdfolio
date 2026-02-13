import { useEffect, useRef, useState } from "react";
import { Briefcase, Code2, FolderOpen, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBadge from "@/components/SectionBadge";

const stats = [
  { label: "Projects Done", value: 50, suffix: "+", icon: FolderOpen, color: "text-primary" },
  { label: "Years Experience", value: 3, suffix: "+", icon: Briefcase, color: "text-accent" },
  { label: "Technologies", value: 20, suffix: "+", icon: Code2, color: "text-primary" },
  { label: "Happy Clients", value: 30, suffix: "+", icon: Users, color: "text-accent" },
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
  <section className="py-16">
    <div className="container mx-auto px-6 max-w-7xl">
      <SectionBadge label="By the Numbers" title="Quick Stats" icon={BarChart3} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const { count, ref } = useCountUp(stat.value);
          return (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <motion.div
                ref={ref}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <stat.icon className={stat.color} size={22} strokeWidth={1.5} />
                </div>
                <p className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                  {count}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default StatsSection;
