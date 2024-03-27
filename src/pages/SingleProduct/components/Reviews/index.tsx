import ReviewList from "./ReviewList";
import { Product } from "../../../../services/store/store";
import { Typography } from "@mui/material";
type ProductReviewsContainerProps = {
  product: Product;
};

function ProductReviewsContainer({ product }: ProductReviewsContainerProps) {
  return (
    <>
      <Typography variant="h4">Reviews</Typography>
      <ReviewList product={product} />
    </>
  );
}

export default ProductReviewsContainer;
