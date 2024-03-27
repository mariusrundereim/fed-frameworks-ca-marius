import { Product } from "../../../../services/store/store";
import { useStore } from "../../../../services/store/store";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { CardMedia } from "@mui/material";
type ProductCardProps = {
  product: Product;
};

function ProductDetails({ product }: ProductCardProps) {
  const { title, price, discountedPrice, rating, image } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };
  return (
    <>
      <Typography>{title}</Typography>
      <Typography>{price}</Typography>
      <Typography>{discountedPrice}</Typography>
      <Typography>{rating}</Typography>
      <CardMedia sx={{ height: 140 }} image={image.url} title={title} />
      <Rating name="read-only" value={rating} precision={0.5} readOnly />
      <Button size="small" variant="outlined" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </>
  );
}

export default ProductDetails;
