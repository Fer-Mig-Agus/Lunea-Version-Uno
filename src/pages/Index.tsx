import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductSection from "@/components/ProductSection";
import Cart from "@/components/Cart";
import CheckoutInfo from "@/components/CheckoutInfo";
import Footer from "@/components/Footer";

// Import all product images
import productBoots from "@/assets/product-boots.jpg";
import productBagCream from "@/assets/product-bag-cream.jpg";
import productWallet from "@/assets/product-wallet.jpg";
import productSandals from "@/assets/product-sandals.jpg";
import productHeels from "@/assets/product-heels.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productTote from "@/assets/product-tote.jpg";
import productCrossbody from "@/assets/product-crossbody.jpg";
import productBackpack from "@/assets/product-backpack.jpg";
import productWalletLong from "@/assets/product-wallet-long.jpg";
import productWalletBlue from "@/assets/product-wallet-blue.jpg";
import productCoinPurse from "@/assets/product-coin-purse.jpg";

const Index = () => {
  const novedades = [
    { image: productBoots, name: "Botas Chelsea", price: "$4,500" },
    { image: productBagCream, name: "Bolso crema", price: "$5,200" },
    { image: productWallet, name: "Billetera cuero", price: "$1,800" },
        { image: productBoots, name: "Botas Chelsea", price: "$4,500" },
    { image: productBagCream, name: "Bolso crema", price: "$5,200" },
    { image: productWallet, name: "Billetera cuero", price: "$1,800" },
  ];

  const calzados = [
    { image: productSandals, name: "Sandalias de verano", price: "$2,800" },
    { image: productHeels, name: "Tacones de noche", price: "$4,200" },
    { image: productSneakers, name: "Tenis de plataforma", price: "$3,500" },
        { image: productSandals, name: "Sandalias de verano", price: "$2,800" },
    { image: productHeels, name: "Tacones de noche", price: "$4,200" },
    { image: productSneakers, name: "Tenis de plataforma", price: "$3,500" },
  ];

  const bolsos = [
    { image: productTote, name: "Bolsa tote", price: "$3,200" },
    { image: productCrossbody, name: "Bolso cruzado", price: "$2,900" },
    { image: productBackpack, name: "Mochila", price: "$4,800" },
        { image: productTote, name: "Bolsa tote", price: "$3,200" },
    { image: productCrossbody, name: "Bolso cruzado", price: "$2,900" },
    { image: productBackpack, name: "Mochila", price: "$4,800" },
  ];

  const billeteras = [
    { image: productWalletLong, name: "Billetera larga", price: "$1,500" },
    { image: productWalletBlue, name: "Billetera azul", price: "$1,650" },
    { image: productCoinPurse, name: "Monedero", price: "$950" },
        { image: productWalletLong, name: "Billetera larga", price: "$1,500" },
    { image: productWalletBlue, name: "Billetera azul", price: "$1,650" },
    { image: productCoinPurse, name: "Monedero", price: "$950" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductSection id="novedades" title="Novedades" products={novedades} />
        <ProductSection id="calzados" title="Calzados" products={calzados} />
        <ProductSection id="bolsos" title="Bolsos" products={bolsos} />
        <ProductSection id="billeteras" title="Billeteras" products={billeteras} />
        <Cart />
        <CheckoutInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
