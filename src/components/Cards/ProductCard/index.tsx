import { useStore } from "../../../services/store/store";
import { Product } from "../../../services/store/store";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { AspectRatio } from "@mui/joy";
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { title, price, discountedPrice, image } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };

  return (
    <>
      <Card>
        <AspectRatio ratio="1">
          <CardMedia
            component="img"
            image={image.url}
            alt={title}
            sx={{ height: 1, width: 1 }}
          />
        </AspectRatio>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discountedPrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductCard;
