import { useStore } from "../../../services/store/store";
import { Product } from "../../../services/store/store";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { AspectRatio } from "@mui/joy";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { title, price, discountedPrice, image, rating } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${product.id}`);
  };

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <AspectRatio ratio="1">
          <CardMedia
            component="img"
            image={image.url}
            alt={title}
            sx={{ height: 1, width: 1 }}
          />
        </AspectRatio>

        <CardContent>
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
          />
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
