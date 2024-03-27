import { Product } from "../../../../services/store/store";
import { useStore } from "../../../../services/store/store";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/material";
type ProductCardProps = {
  product: Product;
};

function ProductDetails({ product }: ProductCardProps) {
  const { title, price, discountedPrice, rating, image, description } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };
  return (
    <>
      <Box>
        <CardMedia sx={{ height: 140 }} image={image.url} title={title} />
        <Box>
          <Typography>{title}</Typography>
          <Typography>{price}</Typography>
          <Typography>{discountedPrice}</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box>
          <Typography>{rating}</Typography>
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
        </Box>
        <Button size="small" variant="outlined" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Box>
    </>
  );
}

export default ProductDetails;
