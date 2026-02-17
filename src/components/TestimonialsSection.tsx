import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  { name: "Mariana Silva", role: "CEO, ModaFit", text: "Em menos de 30 dias, nosso faturamento online dobrou. O site ficou incrível e super rápido.", initials: "MS" },
  { name: "Carlos Oliveira", role: "Dono, Restaurante Exuent", text: "Antes do site, dependíamos só do Instagram. Agora temos reservas automatizadas e o salão sempre cheio.", initials: "CO" },
  { name: "Ana Beatriz Souza", role: "Sócia, Silva & Souza Advocacia", text: "Triplicamos a captação de clientes. O site transmite exatamente a seriedade que nosso escritório precisa.", initials: "AS" },
  { name: "Rafael Mendes", role: "Fundador, TechStart", text: "O melhor investimento que fiz no meu negócio. ROI positivo já na primeira semana.", initials: "RM" },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 section-alt">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name}>
                  <div className="p-8 rounded-2xl bg-card border border-border">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6 italic text-center text-lg">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3 justify-center">
                      <div className="w-11 h-11 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
