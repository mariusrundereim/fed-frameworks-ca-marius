import { Product } from "../../services/store/store";
import ProductDetails from "./components/ProductDetails";
import ProductReviewsContainer from "./components/Reviews";
type SingleProductProps = {
  product: Product | undefined;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductDetails product={product} />
      <ProductReviewsContainer product={product} />
    </>
  );
};

export default SingleProduct;
