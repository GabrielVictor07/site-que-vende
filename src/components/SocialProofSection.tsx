import { Users, FolderCheck, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "+100", label: "Clientes Atendidos" },
  { icon: FolderCheck, value: "+250", label: "Projetos Entregues" },
  { icon: TrendingUp, value: "+180%", label: "Aumento Médio de Conversão" },
  { icon: Award, value: "5 Anos", label: "de Experiência" },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-fade-up delay-${(i + 1) * 100} text-center space-y-3`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mx-auto">
                <stat.icon size={28} />
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
