import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">L</span>
              </div>
              <span className="font-bold text-lg">LUNEA</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#novedades" className="text-sm font-medium hover:text-accent transition-colors">
                Novedades
              </a>
              <a href="#calzados" className="text-sm font-medium hover:text-accent transition-colors">
                Calzados
              </a>
              <a href="#bolsos" className="text-sm font-medium hover:text-accent transition-colors">
                Bolsos
              </a>
              <a href="#billeteras" className="text-sm font-medium hover:text-accent transition-colors">
                Billeteras
              </a>
              <a href="#acerca" className="text-sm font-medium hover:text-accent transition-colors">
                Acerca
              </a>
              <a href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
