const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero começar agora!";

const FinalCtaSection = () => {
  return (
    <section className="hero-section py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 70%)',
      }} />
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="animate-fade-up text-3xl md:text-5xl font-display font-bold text-hero-foreground leading-tight">
            Seu concorrente já pode estar{" "}
            <span className="text-gradient">na sua frente</span> agora.
          </h2>
          <p className="animate-fade-up delay-100 text-lg text-hero-muted max-w-xl mx-auto">
            Enquanto você pensa, outros já estão vendendo online. Não deixe para depois o que pode transformar o seu negócio hoje.
          </p>
          <div className="animate-fade-up delay-200">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cta-gradient hover:cta-gradient-hover text-accent-foreground font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsla(24,100%,50%,0.3)]"
            >
              QUERO COMEÇAR AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
