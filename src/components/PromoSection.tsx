const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Quero aproveitar a promoção!";

const PromoSection = () => {
  return (
    <section className="promo-section py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center space-y-6">
        <p className="animate-fade-up text-4xl md:text-5xl font-display font-bold">
          🔥 PROMOÇÃO POR TEMPO LIMITADO
        </p>
        <p className="animate-fade-up delay-100 text-lg md:text-xl opacity-90 max-w-xl mx-auto">
          Sites profissionais com condição especial. Garanta o seu antes que acabe!
        </p>
        <div className="animate-fade-up delay-200">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-hero text-hero-foreground font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            GARANTIR MINHA VAGA
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
