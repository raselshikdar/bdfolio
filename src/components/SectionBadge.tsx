import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface Props {
  label: string;
  title: string;
  icon: LucideIcon;
  variant?: "green" | "red";
}

const SectionBadge = ({ label, title, icon: Icon, variant = "green" }: Props) => {
  const border = variant === "red" ? "border-accent/40 hover:border-accent" : "border-primary/40 hover:border-primary";
  const glow = variant === "red" ? "hover:shadow-[0_0_16px_hsl(355,90%,56%,0.2)]" : "hover:shadow-[0_0_16px_hsl(160,100%,20%,0.2)]";

  return (
    <div className="flex flex-col items-center text-center mb-8">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-3"
      >
        {label}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
        whileHover={{ scale: 1.04 }}
        className={`inline-flex items-center gap-2.5 glass rounded-full px-6 py-2.5 border ${border} ${glow} transition-all duration-300 cursor-default`}
      >
        <Icon size={16} className="text-primary" strokeWidth={2} />
        <span className="text-sm font-semibold uppercase tracking-wider text-foreground font-serif">
          {title}
        </span>
      </motion.div>
    </div>
  );
};

export default SectionBadge;
