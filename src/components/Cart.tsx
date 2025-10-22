import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = [
    { name: "Bolso cuero", quantity: 1, price: "$5,200" },
    { name: "Cartera Mini", quantity: 2, price: "$2,100" },
    { name: "Billetera", quantity: 1, price: "$1,500" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tu Carrito</h2>
          
          <div className="bg-background rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Artículo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Cantidad</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Precio</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cartItems.map((item, index) => (
                    <tr key={index} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4 font-semibold">{item.price}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between gap-8">
                    <span className="text-sm text-muted-foreground">Subtotal:</span>
                    <span className="font-semibold">€ 127,00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-sm text-muted-foreground">Envío:</span>
                    <span className="font-semibold">€ 8,00</span>
                  </div>
                  <div className="flex justify-between gap-8 text-lg">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">€ 135,00</span>
                  </div>
                </div>
                
                <Button variant="pink" size="lg">
                  Iniciar el Pago
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
