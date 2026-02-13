import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

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

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  const typedText = useTypingEffect(roles);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Jamdani pattern bg */}
      <div className="absolute inset-0 jamdani-pattern" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 flex flex-col items-center text-center pt-24 pb-16">
        {/* Profile image with halo */}
        <motion.div {...fadeUp(0)} className="relative mb-8">
          {/* Alpona halo */}
          <div className="absolute inset-0 -m-6 rounded-full jamdani-pattern-strong opacity-40" />
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-[3px] border-primary shadow-[0_0_40px_hsl(160,100%,20%,0.25)] overflow-hidden bg-secondary relative z-10">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground font-serif text-lg">
              Your Photo
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.25)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight"
        >
          Your Name
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div {...fadeUp(0.45)} className="mt-4 h-8 flex items-center justify-center">
          <span className="text-lg md:text-xl text-primary font-medium">
            {typedText}
          </span>
          <span className="ml-0.5 w-[2px] h-6 bg-accent animate-pulse inline-block" />
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
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 text-sm rounded-full gap-2"
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
              className="glass rounded-full px-6 py-2.5 text-sm gap-2"
            >
              <a href="#projects">
                <FolderOpen size={15} /> View Projects
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
