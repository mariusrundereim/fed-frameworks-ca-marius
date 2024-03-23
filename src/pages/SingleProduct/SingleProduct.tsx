import { Product } from "../../services/store/store";
import ProductDetails from "./components/ProductDetails";
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
    </div>
  );
};

export default SingleProduct;
