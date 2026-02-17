import { Shield, Heart, Clock, Globe, Zap } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Aumenta autoridade", desc: "Um site profissional posiciona sua marca como referência no mercado." },
  { icon: Heart, title: "Gera confiança", desc: "Clientes confiam mais em negócios que possuem presença digital sólida." },
  { icon: Clock, title: "Vende 24h automaticamente", desc: "Seu site trabalha para você mesmo enquanto você dorme." },
  { icon: Globe, title: "Fortalece presença online", desc: "Seja encontrado por quem procura o que você oferece." },
  { icon: Zap, title: "Design + Estratégia = Mais vendas", desc: "Sites bonitos que também são máquinas de conversão." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 section-alt">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Por que ter um <span className="text-gradient">site profissional?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quem não é visto, não é lembrado. E quem não tem site, perde dinheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`animate-fade-up delay-${(i + 1) * 100} group p-8 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <b.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
