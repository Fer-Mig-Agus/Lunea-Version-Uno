import { Button } from "@/components/ui/button";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <section id="acerca" className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Acerca de Nosotros
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
            Ya llevas un camino con nosotros a tu memoria, amorosa y saludable, 
            en este planeta es donde tomas las riendas de tu vida al alcance de las herencias 
            de cada plano intencional, donde cada viaje es bueno para ti es busca tu destino.
          </p>
          <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Conoce más
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
