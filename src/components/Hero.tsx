import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              LUNEA
            </h1>
            <p className="text-2xl md:text-3xl font-light tracking-widest text-muted-foreground">
              SIMPLE & FEMENINA
            </p>
          </div>

          <Button variant="pink" size="lg" className="mt-4">
            Conseguir ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
