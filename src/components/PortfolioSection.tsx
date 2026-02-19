import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  { img: portfolio1, name: "E-commerce ModaFit", desc: "Loja online completa com aumento de 220% em vendas no primeiro mês.", link: "#" },
  { img: portfolio2, name: "Restaurante Exuent", desc: "Site com cardápio digital e reservas online. Lotação máxima toda semana.", link: "#" },
  { img: portfolio3, name: "Advocacia Silva & Souza", desc: "Site institucional que triplicou a captação de clientes em 90 dias.", link: "#" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Projetos reais que geraram resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`animate-fade-up delay-${(i + 1) * 100} group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:shadow-accent/5 transition-all duration-500`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-display font-bold text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mt-2"
                >
                  Ver projeto <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
