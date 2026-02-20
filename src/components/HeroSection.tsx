import heroMockup from "@/assets/hero-mockup.png";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero um site que vende!";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--hero-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hero-foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 rounded-full"
        style={{ background: 'radial-gradient(ellipse, hsla(24, 100%, 50%, 0.15), transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16 relative z-10">
        {/* Centered content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-accent/20 bg-accent/5 text-accent">
              🚀 Sites que geram resultados reais
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
            Seu negócio não precisa de mais seguidores. Precisa de um site que{" "}
            <span className="text-gradient">VENDE.</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200 text-base md:text-lg text-hero-muted max-w-2xl leading-relaxed">
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
              className="inline-flex items-center gap-2 font-semibold text-base px-8 py-3.5 rounded-lg border border-hero-muted/30 text-hero-foreground hover:bg-hero-foreground/5 transition-all duration-300"
            >
              Ver projetos
            </a>
          </div>

          {/* Mockup */}
          <div className="animate-fade-up delay-400 w-full pt-8">
            <div className="relative mx-auto max-w-5xl">
              {/* Glow behind mockup */}
              <div className="absolute -inset-4 rounded-2xl opacity-30 blur-3xl"
                style={{ background: 'linear-gradient(135deg, hsla(24, 100%, 50%, 0.1), hsla(220, 25%, 20%, 0.5))' }}
              />
              <div className="relative rounded-xl overflow-hidden border border-hero-muted/10 shadow-2xl shadow-black/40">
                <img
                  src={heroMockup}
                  alt="Mockup de site profissional em laptop e smartphone"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Social proof strip */}
          <div className="animate-fade-up delay-500 flex flex-wrap items-center justify-center gap-8 pt-8 opacity-60">
            {["+100 Clientes", "+250 Projetos", "5 Anos", "+180% Conversão"].map((label) => (
              <span key={label} className="text-sm font-medium text-hero-muted tracking-wide uppercase">
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
