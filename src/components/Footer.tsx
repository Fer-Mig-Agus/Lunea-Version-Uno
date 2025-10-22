import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Información Adicional */}
          <div>
            <h3 className="font-bold text-lg mb-4">Información Adicional</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Políticas</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Envíos y Devoluciones</a>
              </li>
            </ul>
          </div>

          {/* Pagos/modos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Pagos/modos</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Aceptamos tarjetas de crédito, débito y transferencias bancarias
            </p>
            <div className="flex gap-2 flex-wrap">
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">
                VISA
              </div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">
                MC
              </div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">
                AMEX
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Suscríbete para recibir ofertas exclusivas
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1"
              />
              <Button variant="pink">
                Enviar
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 LUNEA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
