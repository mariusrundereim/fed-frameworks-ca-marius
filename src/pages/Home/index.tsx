import { useEffect } from "react";
import { useStore } from "../../services/store/store";

function Home() {
  const { products, fetchProducts, totalPrice } = useStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <h2>Products</h2>
        {Array.isArray(products) &&
          products.map((product) => (
            <div key={product.id}>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
          ))}
        <h3>Total Price: ${totalPrice()}</h3>
      </div>
    </>
  );
}

export default Home;
