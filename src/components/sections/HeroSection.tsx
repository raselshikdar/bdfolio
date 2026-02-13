import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center jamdani-pattern overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-24">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-foreground leading-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-md">
            A passionate developer crafting digital experiences with the warmth of
            Bangladeshi heritage and the precision of modern technology.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-base rounded-full"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-3 text-base">
              <a href="#projects">View Work</a>
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
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-secondary overflow-hidden relative shadow-2xl">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground font-serif text-xl">
            Your Photo
          </div>
        </div>
        {/* Available badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute -bottom-4 right-4 md:right-8 glass rounded-full px-5 py-2 shadow-lg"
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
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ArrowDown className="text-primary/50" size={28} />
    </motion.div>
  </section>
);

export default HeroSection;
