import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../services/store/store";

function SingleProduct() {
  const { productId = "" } = useParams();
  const product = useStore((state) => state.getProduct(productId));

  useEffect(() => {
    if (productId && !product) {
      useStore.getState().fetchProducts().catch(console.error);
    }
  }, [productId, product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
}

export default SingleProduct;
