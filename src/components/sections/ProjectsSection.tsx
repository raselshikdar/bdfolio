import { useState } from "react";
import { ExternalLink, Github, Layers, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBadge from "@/components/SectionBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MarkdownReader from "@/components/MarkdownReader";

interface ContentItem {
  title: string;
  description: string;
  tags: string[];
  type: "project" | "blog";
  content: string;
  image: string;
  link?: string;
  source?: string;
}

const items: ContentItem[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    type: "project",
    content: "## E-Commerce Platform\n\nBuilt a scalable e-commerce platform featuring product catalog management, real-time inventory tracking, and Stripe payment integration.\n\n### Key Features\n- Server-side rendering for SEO\n- Real-time stock updates via WebSockets\n- Multi-currency support\n- Admin dashboard with analytics\n\n### Tech Stack\n```typescript\nconst stack = {\n  frontend: ['React', 'Next.js', 'Tailwind CSS'],\n  backend: ['Node.js', 'Express', 'PostgreSQL'],\n  payments: ['Stripe API'],\n  deployment: ['Vercel', 'AWS RDS']\n};\n```\n\n### Architecture\nThe platform follows a microservices architecture with separate services for:\n- Product Management\n- Order Processing\n- Payment Handling\n- Notification System",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
    link: "#",
    source: "https://github.com",
  },
  {
    title: "AI Chat Interface",
    description: "A conversational AI interface with streaming responses and multi-model support.",
    tags: ["TypeScript", "OpenAI", "Tailwind", "WebSocket"],
    type: "project",
    content: "## AI Chat Interface\n\nDeveloped a sleek chat interface for interacting with large language models, featuring streaming responses and conversation history.\n\n### Features\n- Real-time streaming responses\n- Conversation history with search\n- Multi-model support (GPT-4, Claude)\n- Code syntax highlighting\n\n```typescript\ninterface ChatMessage {\n  role: 'user' | 'assistant';\n  content: string;\n  timestamp: Date;\n  model: string;\n}\n```",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
    link: "#",
    source: "https://github.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and customizable widgets.",
    tags: ["React", "D3.js", "PostgreSQL", "Docker"],
    type: "project",
    content: "## Analytics Dashboard\n\nCreated a comprehensive analytics dashboard with real-time data visualization and customizable widgets.\n\n### Highlights\n- 15+ chart types with D3.js\n- Real-time data streaming\n- Export to PDF/CSV\n- Role-based access control\n\n```javascript\nconst chartConfig = {\n  type: 'timeseries',\n  realtime: true,\n  refreshInterval: 5000,\n  theme: 'bangladesh-green'\n};\n```",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
  },
  {
    title: "Building Accessible React Apps",
    description: "A comprehensive guide to a11y best practices in modern React applications.",
    tags: ["Accessibility", "React", "Guide"],
    type: "blog",
    content: "## Building Accessible React Apps\n\nAccessibility isn't an afterthought — it's a fundamental part of building great software.\n\n### Why It Matters\nOver 1 billion people worldwide experience some form of disability. Building accessible applications ensures everyone can use your software.\n\n### Key Practices\n1. **Semantic HTML** — Use proper elements (`<nav>`, `<main>`, `<article>`)\n2. **ARIA Labels** — Provide context for screen readers\n3. **Keyboard Navigation** — Ensure all interactive elements are focusable\n4. **Color Contrast** — Meet WCAG 2.1 AA standards\n\n```tsx\n// Good: Accessible button\n<button aria-label=\"Close dialog\" onClick={onClose}>\n  <XIcon aria-hidden=\"true\" />\n</button>\n```\n\n### Testing Tools\n- axe-core for automated testing\n- VoiceOver for manual screen reader testing\n- Lighthouse accessibility audits",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop",
  },
  {
    title: "My Journey into Open Source",
    description: "Lessons learned from contributing to open-source projects and building community.",
    tags: ["Open Source", "Community", "Story"],
    type: "blog",
    content: "## My Journey into Open Source\n\nStarting in open source felt daunting, but it turned out to be the most rewarding decision of my career.\n\n### First Contribution\nMy first PR was a simple typo fix in a documentation file. It was merged within hours, and the maintainer left an encouraging comment. That small win gave me the confidence to tackle bigger issues.\n\n### Lessons Learned\n1. **Start small** — Documentation fixes are valuable contributions\n2. **Read the guidelines** — Every project has different conventions\n3. **Be patient** — Maintainers are often volunteers\n4. **Build relationships** — Community matters more than code\n\n### Impact\nAfter 2 years of contributing, I've:\n- Merged 50+ PRs across 15 projects\n- Become a maintainer of 2 libraries\n- Spoken at 3 community meetups in Dhaka\n\n> \"The best way to learn is to teach, and the best way to teach is to contribute.\"",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=340&fit=crop",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<ContentItem | null>(null);

  return (
    <section id="projects" className="py-16 jamdani-pattern">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionBadge label="My Work & Writing" title="Projects & Blogs" icon={Layers} variant="red" />

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
                        className="glass rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col cursor-pointer group"
                        onClick={() => setSelected(item)}
                      >
                        {/* Cover */}
                        <div className="h-40 overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                          <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="glass text-[10px] px-2 py-0.5">
                              {item.type === "project" ? "📦 Project" : "✍️ Blog"}
                            </Badge>
                          </div>
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
                          <p className="text-xs text-muted-foreground flex-1 line-clamp-2">
                            {item.description}
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            {item.link && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 text-[11px] rounded-full glass gap-1"
                                onClick={(e) => { e.stopPropagation(); window.open(item.link, '_blank'); }}
                              >
                                <Eye size={11} /> Live Demo
                              </Button>
                            )}
                            {item.source && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 text-[11px] rounded-full glass gap-1"
                                onClick={(e) => { e.stopPropagation(); window.open(item.source, '_blank'); }}
                              >
                                <Github size={11} /> Source
                              </Button>
                            )}
                            <Button
                              variant="link"
                              size="sm"
                              className="ml-auto p-0 h-auto text-primary text-[11px]"
                              onClick={(e) => { e.stopPropagation(); setSelected(item); }}
                            >
                              Read More <ExternalLink size={11} className="ml-1" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Full-screen Markdown Reader */}
      <AnimatePresence>
        {selected && (
          <MarkdownReader
            title={selected.title}
            description={selected.description}
            content={selected.content}
            image={selected.image}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
