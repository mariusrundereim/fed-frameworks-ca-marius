import { useStore } from "../../../services/store/store";
import { Product } from "../../../services/store/store";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
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
      <Card>
        <Box sx={{ width: 1, pt: "100%", position: "relative" }}>
          <CardMedia
            component="img"
            onClick={handleCardClick}
            image={image.url}
            alt={title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <CardContent>
          {rating ? (
            <Rating
              name="read-only"
              value={rating}
              precision={0.5}
              size="small"
              readOnly
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              No rating
            </Typography>
          )}
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
          <Button
            size="small"
            variant="outlined"
            fullWidth
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductCard;
