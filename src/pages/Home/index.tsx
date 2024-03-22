import { useEffect } from "react";
import { useStore } from "../../services/store/store";
import ProductCard from "../../components/Cards/ProductCard";

function Home() {
  const { products, fetchProducts, totalPrice } = useStore();
  useEffect(() => {
    fetchProducts().catch(console.error);
  }, []);

  return (
    <>
      <div>
        <h2>Products</h2>
        {products.map((product) => (
          <>
            <h6>yo</h6>
            <ProductCard key={product.id} product={product} />
          </>
        ))}

        <h3>Total Price: ${totalPrice()}</h3>
      </div>
    </>
  );
}

export default Home;
