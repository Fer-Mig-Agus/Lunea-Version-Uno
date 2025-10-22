import { Button } from "@/components/ui/button";
import iconLunea from '@/assets/lunea.png';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="space-y-6">
            <div className="w-[350px] md:w-[450px]">
                  <img src={iconLunea} alt="" />
              </div>
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
