import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-muted mb-3 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-sm font-medium mb-2">{name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{price}</span>
        <Button variant="pink" size="sm">
          Ver
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
