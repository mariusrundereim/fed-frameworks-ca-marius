import ReviewList from "./ReviewList";
import { Product } from "../../../../services/store/store";

type ProductReviewsContainerProps = {
  product: Product;
};

function ProductReviewsContainer({ product }: ProductReviewsContainerProps) {
  return (
    <>
      <ReviewList product={product} />
    </>
  );
}

export default ProductReviewsContainer;
