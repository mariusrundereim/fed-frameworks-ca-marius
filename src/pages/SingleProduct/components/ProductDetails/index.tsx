import { Product } from "../../../../services/store/store";
import { useStore } from "../../../../services/store/store";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import DescAccordion from "../../../../components/Accordion/DescAccordion";
import { Grid } from "@mui/material";
import { formatCurrencyDirect } from "../../../../utils/formatCurrency";
import { Paper } from "@mui/material";
type ProductCardProps = {
  product: Product;
};

function ProductDetails({ product }: ProductCardProps) {
  const { title, image, description, discountPercent, discountedPrice } =
    product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };
  return (
    <>
      <Paper elevation={0} sx={{ margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={image.url}
              title={title}
              sx={{ maxHeight: { md: "50vh" } }}
            />
          </Grid>
          {/* Product Details */}
          <Grid item xs={12} md={6} container direction="column" gap={6}>
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                {title}
              </Typography>
              <Typography gutterBottom>
                {formatCurrencyDirect(discountedPrice)}
              </Typography>
              <Typography>{discountPercent}%</Typography>
            </Grid>
            <Grid container gap={2} direction="column">
              <Grid item>
                <Button
                  size="large"
                  variant="outlined"
                  onClick={handleAddToCart}
                  fullWidth
                  disableRipple
                >
                  Add to cart
                </Button>
              </Grid>
              <Grid item>
                <DescAccordion description={description} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ProductDetails;
