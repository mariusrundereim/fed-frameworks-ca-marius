import ReviewList from "./ReviewList";
import { Product } from "../../../../services/store/store";
import { Box, Typography } from "@mui/material";
type ProductReviewsContainerProps = {
  product: Product;
};

function ProductReviewsContainer({ product }: ProductReviewsContainerProps) {
  return (
    <>
      <Box>
        <Typography variant="h4">Reviews</Typography>
        <ReviewList product={product} />
      </Box>
    </>
  );
}

export default ProductReviewsContainer;
