import { Product } from "../../../../services/store/store";
import { useStore } from "../../../../services/store/store";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/material";
import DescAccordion from "../../../../components/Accordion/DescAccordion";
import { Grid } from "@mui/material";
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container gap={4}>
          <Grid item border="3px solid orange">
            <Box border="3px dotted blue" sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                sx={{ maxHeight: "20rem" }}
                image={image.url}
                title={title}
              />
            </Box>
          </Grid>
          <Grid item gap={4}>
            <Typography variant="h4">{title}</Typography>
            <Box>
              <Typography>{roundedPrice}</Typography>
              <Typography>{discountPercent}%</Typography>
            </Box>
            <Button size="small" variant="outlined" onClick={handleAddToCart}>
              Add to cart
            </Button>
            <DescAccordion description={description} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductDetails;
