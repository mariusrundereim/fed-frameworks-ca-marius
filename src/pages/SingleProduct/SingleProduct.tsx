import { Product } from "../../services/store/store";
import ProductDetails from "./components/ProductDetails";
import ProductReviewsContainer from "./components/Reviews";
import { Container } from "@mui/material";

type SingleProductProps = {
  product: Product;
};

function SingleProduct({ product }: SingleProductProps) {
  return (
    <>
      <Container maxWidth="xl">
        <ProductDetails product={product} />
        <ProductReviewsContainer product={product} />
      </Container>
    </>
  );
}

export default SingleProduct;
