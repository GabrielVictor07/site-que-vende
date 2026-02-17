import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá!";

const links = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 hero-section border-b border-hero-muted/10 backdrop-blur-md bg-hero/90">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-xl text-hero-foreground">
          Web<span className="text-accent">Studio</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-gradient text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:scale-105 transition-transform"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-hero-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden hero-section border-t border-hero-muted/10 px-6 py-6 space-y-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-hero-muted hover:text-hero-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block cta-gradient text-accent-foreground font-semibold text-center px-5 py-3 rounded-lg"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
