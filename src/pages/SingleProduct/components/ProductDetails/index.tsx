import { Product } from "../../../../services/store/store";
import { useStore } from "../../../../services/store/store";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/material";
import DescAccordion from "../../../../components/Accordion/DescAccordion";
type ProductCardProps = {
  product: Product;
};

function ProductDetails({ product }: ProductCardProps) {
  const { title, image, description, roundedPrice, discountPercent } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };
  return (
    <>
      <Box>
        <CardMedia sx={{ height: 140 }} image={image.url} title={title} />
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography>{roundedPrice}</Typography>
          <Typography>{discountPercent}%</Typography>
        </Box>
        <DescAccordion description={description} />
        <Button size="small" variant="outlined" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Box>
    </>
  );
}

export default ProductDetails;
