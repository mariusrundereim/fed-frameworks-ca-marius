// Handles logic and states

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../services/store/store";
import SingleProduct from "./SingleProduct";

function SingleProductContainer() {
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

  return <SingleProduct product={product} />;
}

export default SingleProductContainer;
