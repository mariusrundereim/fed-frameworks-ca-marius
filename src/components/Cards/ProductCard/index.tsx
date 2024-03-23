import { useStore } from "../../../services/store/store";
import { Product } from "../../../services/store/store";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import { AspectRatio } from "@mui/joy";
type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { title, price, image } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };

  return (
    <>
      <Box component="article" sx={{ border: "1px solid red" }}>
        <AspectRatio ratio="1" sx={{ width: "100%" }}>
          <CardMedia
            component="img"
            image={image.url}
            alt="No image text"
            sx={{
              width: "100%",
              maxHeight: "200px",
              objectPosition: "center",
              objectFit: "cover",
            }}
          />
        </AspectRatio>

        <Box>
          <h1>{title}</h1>
          <p>{price}</p>
        </Box>
        <Box>
          <Button variant="outlined" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ProductCard;
