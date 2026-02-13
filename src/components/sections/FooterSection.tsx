import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com", label: "X" },
];

const FooterSection = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl font-bold">Portfolio</p>
          <p className="text-sm text-primary-foreground/70 mt-1">
            Crafting digital experiences with soul.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={14} className="text-accent fill-accent" /> in Bangladesh 🇧🇩
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
