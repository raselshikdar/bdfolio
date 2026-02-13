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
    content: "## AI Chat Interface\n\nDeveloped a sleek chat interface for interacting with large language models, featuring streaming responses and conversation history.\n\n### Highlights\n- Token-by-token streaming\n- Markdown rendering\n- Persistent conversation threads\n- Mobile-responsive design",
    link: "#",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description: "Real-time analytics dashboard for monitoring metrics.",
    tags: ["React", "D3.js", "PostgreSQL"],
    type: "project",
    content: "## Analytics Dashboard\n\nCreated a comprehensive analytics dashboard with real-time data visualization and customizable widgets.\n\n### Features\n- Interactive D3.js charts\n- Drag-and-drop widget arrangement\n- Real-time data via WebSockets\n- Export to PDF/CSV",
  },
  {
    title: "Building Accessible React Apps",
    description: "Best practices for a11y in modern React applications.",
    tags: ["Accessibility", "React", "Guide"],
    type: "blog",
    content: "## Building Accessible React Apps\n\nAccessibility isn't an afterthought — it's a fundamental part of building great software.\n\n### Key Takeaways\n1. Use semantic HTML elements\n2. Manage focus properly in SPAs\n3. Test with screen readers regularly\n4. Ensure sufficient color contrast\n5. Provide keyboard navigation for all interactive elements",
  },
  {
    title: "My Journey into Open Source",
    description: "Lessons learned from contributing to open-source projects.",
    tags: ["Open Source", "Community", "Story"],
    type: "blog",
    content: "## My Journey into Open Source\n\nStarting in open source felt daunting, but it turned out to be the most rewarding decision of my career.\n\n### What I Learned\n- Start small: documentation fixes matter\n- Read existing code before writing new code\n- Communication is as important as code\n- The community is incredibly welcoming",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<ContentItem | null>(null);

  return (
    <section id="projects" className="py-24 jamdani-pattern">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            My Work & Writing
          </p>
          <h2 className="text-4xl font-bold font-serif text-foreground mb-12">
            Projects & Blogs
          </h2>
        </ScrollReveal>

        <Tabs defaultValue="all" className="w-full">
          <ScrollReveal>
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="project">Projects</TabsTrigger>
              <TabsTrigger value="blog">Blogs</TabsTrigger>
            </TabsList>
          </ScrollReveal>

          {["all", "project", "blog"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items
                  .filter((it) => tab === "all" || it.type === tab)
                  .map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 0.08}>
                      <motion.div
                        whileHover={{ y: -6 }}
                        className="glass rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col"
                      >
                        {/* Cover placeholder */}
                        <div className="h-40 bg-primary/10 flex items-center justify-center">
                          <span className="text-primary/30 font-serif text-lg">
                            {item.type === "project" ? "📦" : "✍️"} Cover Image
                          </span>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground flex-1">
                            {item.description}
                          </p>
                          <Button
                            variant="link"
                            className="mt-3 p-0 h-auto text-primary justify-start"
                            onClick={() => setSelected(item)}
                          >
                            Read More <ExternalLink size={14} className="ml-1" />
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
