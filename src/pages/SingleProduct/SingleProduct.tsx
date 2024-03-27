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
    <div>
      <ProductDetails product={product} />
      <ProductReviewsContainer product={product} />
    </div>
  );
};

export default SingleProduct;
