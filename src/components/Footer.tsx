const Footer = () => (
  <footer className="hero-section py-10 border-t border-hero-muted/10">
    <div className="container mx-auto px-6 lg:px-12 text-center">
      <p className="font-display font-bold text-lg text-hero-foreground mb-2">
        Web<span className="text-accent">Studio</span>
      </p>
      <p className="text-sm text-hero-muted">
        © {new Date().getFullYear()} WebStudio. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
