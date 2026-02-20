import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero um site que vende!";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-accent/20 bg-accent/5 text-accent backdrop-blur-sm">
              🚀 Sites que geram resultados reais
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
            Seu negócio não precisa de mais seguidores. Precisa de um site que{" "}
            <span className="text-gradient">VENDE.</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
            Criamos sites estratégicos que transformam visitantes em clientes reais todos os dias,
            com design premium e foco total em conversão.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-gradient hover:cta-gradient-hover text-accent-foreground font-bold text-base px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsla(24,100%,50%,0.3)] animate-pulse-glow"
            >
              QUERO UM SITE QUE VENDE
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 font-semibold text-base px-8 py-3.5 rounded-lg border border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              Ver projetos
            </a>
          </div>

          {/* Social proof strip */}
          <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-8 pt-12 opacity-60">
            {["+100 Clientes", "+250 Projetos", "5 Anos", "+180% Conversão"].map((label) => (
              <span key={label} className="text-sm font-medium text-white/70 tracking-wide uppercase">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
