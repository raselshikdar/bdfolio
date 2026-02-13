import { motion } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  content: string;
  image?: string;
  onClose: () => void;
}

const MarkdownReader = ({ title, description, content, image, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 glass border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-6 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onClose} className="gap-1.5 rounded-full">
            <ArrowLeft size={16} /> Back
          </Button>
          <span className="text-sm font-medium text-muted-foreground truncate">{title}</span>
          <Button variant="ghost" size="icon" onClick={onClose} className="ml-auto rounded-full">
            <X size={18} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="container mx-auto max-w-4xl px-6 py-10"
      >
        {image && (
          <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
            <img src={image} alt={title} className="w-full h-64 md:h-80 object-cover" />
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground mb-8">{description}</p>

        <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-strong:text-foreground">
          <ReactMarkdown
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const codeString = String(children).replace(/\n$/, "");
                if (match) {
                  return (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-xl !bg-card border border-border text-sm"
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  );
                }
                return (
                  <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-foreground" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MarkdownReader;
