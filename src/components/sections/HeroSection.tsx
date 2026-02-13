import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Open Source Advocate"];

function useTypingEffect(strings: string[], typingSpeed = 80, deletingSpeed = 50, pause = 1800) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % strings.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, strings, typingSpeed, deletingSpeed, pause]);

  return text;
}

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  const typedText = useTypingEffect(roles);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Animated Jamdani bg */}
      <div className="absolute inset-0 jamdani-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 flex flex-col items-center text-center pt-24 pb-16">
        {/* Profile image with halo */}
        <motion.div {...fadeUp(0)} className="relative mb-8">
          {/* Alpona halo */}
          <div className="absolute inset-0 -m-8 rounded-full jamdani-pattern-strong opacity-30 blur-[1px]" />
          <div className="absolute inset-0 -m-3 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-[3px] border-primary shadow-[0_0_50px_hsl(160,100%,20%,0.3)] overflow-hidden bg-secondary relative z-10">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight"
        >
          Rahim Ahmed
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div {...fadeUp(0.35)} className="mt-4 h-8 flex items-center justify-center">
          <span className="text-lg md:text-xl text-primary font-medium">
            {typedText}
          </span>
          <span className="ml-0.5 w-[2px] h-6 bg-accent animate-pulse inline-block" />
        </motion.div>

        {/* Social bar */}
        <motion.div {...fadeUp(0.5)} className="mt-6 flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.6)}
          className="mt-5 text-sm md:text-base text-muted-foreground max-w-md"
        >
          Crafting digital experiences with the warmth of Bangladeshi heritage
          and the precision of modern technology.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.75)} className="mt-8 flex flex-wrap gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-7 py-2.5 text-sm rounded-full gap-2 shadow-lg shadow-accent/20"
            >
              <a href="/resume.pdf" download>
                <Download size={15} /> Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              variant="outline"
              className="glass rounded-full px-7 py-2.5 text-sm gap-2 hover:border-primary/50"
            >
              <a href="#contact">
                <MessageCircle size={15} /> Let's Talk
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary/50" size={22} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
