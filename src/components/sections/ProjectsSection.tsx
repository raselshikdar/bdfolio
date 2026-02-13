import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ContentItem {
  title: string;
  description: string;
  tags: string[];
  type: "project" | "blog";
  content: string;
  image?: string;
  link?: string;
}

const items: ContentItem[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration.",
    tags: ["React", "Node.js", "Stripe"],
    type: "project",
    content: "## E-Commerce Platform\n\nBuilt a scalable e-commerce platform featuring product catalog management, real-time inventory tracking, and Stripe payment integration.\n\n### Key Features\n- Server-side rendering for SEO\n- Real-time stock updates via WebSockets\n- Multi-currency support\n- Admin dashboard with analytics",
    link: "#",
  },
  {
    title: "AI Chat Interface",
    description: "A conversational AI interface with streaming responses.",
    tags: ["TypeScript", "OpenAI", "Tailwind"],
    type: "project",
    content: "## AI Chat Interface\n\nDeveloped a sleek chat interface for interacting with large language models, featuring streaming responses and conversation history.",
    link: "#",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description: "Real-time analytics dashboard for monitoring metrics.",
    tags: ["React", "D3.js", "PostgreSQL"],
    type: "project",
    content: "## Analytics Dashboard\n\nCreated a comprehensive analytics dashboard with real-time data visualization and customizable widgets.",
  },
  {
    title: "Building Accessible React Apps",
    description: "Best practices for a11y in modern React applications.",
    tags: ["Accessibility", "React", "Guide"],
    type: "blog",
    content: "## Building Accessible React Apps\n\nAccessibility isn't an afterthought — it's a fundamental part of building great software.",
  },
  {
    title: "My Journey into Open Source",
    description: "Lessons learned from contributing to open-source projects.",
    tags: ["Open Source", "Community", "Story"],
    type: "blog",
    content: "## My Journey into Open Source\n\nStarting in open source felt daunting, but it turned out to be the most rewarding decision of my career.",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<ContentItem | null>(null);

  return (
    <section id="projects" className="py-16 jamdani-pattern">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            My Work & Writing
          </p>
          <h2 className="text-3xl font-bold font-serif text-foreground mb-10">
            Projects & Blogs
          </h2>
        </ScrollReveal>

        <Tabs defaultValue="all" className="w-full">
          <ScrollReveal>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="project">Projects</TabsTrigger>
              <TabsTrigger value="blog">Blogs</TabsTrigger>
            </TabsList>
          </ScrollReveal>

          {["all", "project", "blog"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items
                  .filter((it) => tab === "all" || it.type === tab)
                  .map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.06}>
                      <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="glass rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer"
                        onClick={() => setSelected(item)}
                      >
                        {/* Cover */}
                        <div className="h-36 bg-primary/10 flex items-center justify-center">
                          <span className="text-primary/30 font-serif text-base">
                            {item.type === "project" ? "📦" : "✍️"} Cover Image
                          </span>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {item.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-[10px] glass px-2 py-0.5"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="font-serif text-base font-bold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground flex-1">
                            {item.description}
                          </p>
                          <Button
                            variant="link"
                            className="mt-2 p-0 h-auto text-primary justify-start text-xs"
                            onClick={(e) => { e.stopPropagation(); setSelected(item); }}
                          >
                            Read More <ExternalLink size={12} className="ml-1" />
                          </Button>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{selected?.title}</DialogTitle>
            <DialogDescription>{selected?.description}</DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm max-w-none mt-4 text-foreground/80 whitespace-pre-line">
            {selected?.content}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
