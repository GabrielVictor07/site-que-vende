import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Vim pelo site e quero saber mais!";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 cta-gradient text-accent-foreground font-semibold px-5 py-3.5 rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_30px_hsla(24,100%,50%,0.4)] transition-all duration-300 animate-pulse-glow"
      aria-label="Falar agora pelo WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">Falar agora</span>
    </a>
  );
};

export default FloatingWhatsApp;
