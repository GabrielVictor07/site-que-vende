import heroMockup from "@/assets/hero-mockup.png";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero um site que vende!";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-accent/30 text-accent mb-6">
                🚀 Sites que geram resultados reais
              </span>
            </div>
            
            <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Seu negócio não precisa de mais seguidores. Precisa de um site que{" "}
              <span className="text-gradient">VENDE.</span>
            </h1>
            
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-hero-muted max-w-lg">
              Criamos sites estratégicos que transformam visitantes em clientes reais todos os dias.
            </p>
            
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-gradient hover:cta-gradient-hover text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsla(24,100%,50%,0.3)] text-center animate-pulse-glow"
              >
                QUERO UM SITE QUE VENDE
              </a>
            </div>

            <div className="animate-fade-up delay-400 flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-hero flex items-center justify-center text-xs font-bold text-hero-muted">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-hero-muted">
                <span className="text-accent font-semibold">+100</span> clientes satisfeitos
              </p>
            </div>
          </div>

          {/* Right - Mockup */}
          <div className="animate-fade-up delay-300 flex justify-center lg:justify-end">
            <div className="animate-float">
              <img
                src={heroMockup}
                alt="Mockup de site profissional em laptop e smartphone"
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
