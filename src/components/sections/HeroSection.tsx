import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center jamdani-pattern overflow-hidden">
    <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center py-20 pt-28">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rickshaw-border">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Welcome to my world
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-md">
            A passionate developer crafting digital experiences with the warmth of
            Bangladeshi heritage and the precision of modern technology.
          </p>
          <div className="mt-6 flex gap-4">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 text-sm rounded-full"
            >
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                Get in Touch
              </motion.a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6 py-2.5 text-sm">
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                View Work
              </motion.a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-secondary overflow-hidden relative shadow-2xl">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground font-serif text-xl">
            Your Photo
          </div>
        </div>
        {/* Available badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute -bottom-4 right-4 md:right-8 glass rounded-full px-4 py-2 shadow-lg"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            Available for Hire
          </span>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
    >
      <ArrowDown className="text-primary/50" size={24} />
    </motion.div>
  </section>
);

export default HeroSection;
