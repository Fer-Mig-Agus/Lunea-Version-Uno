import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const checkoutSchema = z.object({
  fullName: z.string().trim().min(1, { message: "El nombre completo es requerido" }).max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  paymentMethod: z.enum(["efectivo", "transferencia", "tarjeta"], {
    required_error: "Debe seleccionar un método de pago",
  }),
});

const CheckoutInfo = () => {
  const [fullName, setFullName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("efectivo");
  const [errors, setErrors] = useState<{ fullName?: string }>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = checkoutSchema.parse({
        fullName,
        paymentMethod,
      });

      toast({
        title: "Compra iniciada",
        description: `Procesando tu pedido con pago por ${validatedData.paymentMethod}`,
      });

      // Aquí iría la lógica para procesar la compra
      console.log("Compra procesada:", validatedData);
      
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { fullName?: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0] === "fullName") {
            fieldErrors.fullName = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Información Adicional */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Informacion Adicional</h2>
              
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Payment Method</h2>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="efectivo" id="efectivo" />
                  <Label htmlFor="efectivo" className="flex-1 cursor-pointer">
                    Efectivo
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="transferencia" id="transferencia" />
                  <Label htmlFor="transferencia" className="flex-1 cursor-pointer">
                    Trasferencia
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="tarjeta" id="tarjeta" />
                  <Label htmlFor="tarjeta" className="flex-1 cursor-pointer">
                    Tarjeta Debito/Credito
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              variant="secondary" 
              size="lg"
              className="w-auto"
            >
              Concretar Compra
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutInfo;
