import ProductCard from "./ProductCard";

interface Product {
  image: string;
  name: string;
  price: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
}

const ProductSection = ({ id, title, products }: ProductSectionProps) => {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
