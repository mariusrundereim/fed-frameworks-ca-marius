import { Product } from "../../services/store/store";
import ProductDetails from "./components/ProductDetails";
import ProductReviewsContainer from "./components/Reviews";
import { Box } from "@mui/material";
type SingleProductProps = {
  product: Product | undefined;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Box display="flex" flexDirection="column" width="100%">
        <ProductDetails product={product} />

        <ProductReviewsContainer product={product} />
      </Box>
    </>
  );
};

export default SingleProduct;
