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
  const { title, image, description, roundedPrice, discountPercent } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };
  return (
    <>
      <Paper elevation={0} sx={{ margin: "auto", flexFlow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              image={image.url}
              title={title}
              // sx={{ maxWidth: { lg: "440px" } }}
              sx={{ maxHeight: { md: "50dvh" } }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs={12}
              direction="column"
              sx={{
                placeSelf: { sm: "auto", md: "center" },
              }}
            >
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  {title}
                </Typography>
                <Typography gutterBottom>
                  {formatCurrencyDirect(roundedPrice)}
                </Typography>
                <Typography>{discountPercent}%</Typography>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  variant="outlined"
                  onClick={handleAddToCart}
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
      {/* Old */}
      {/* <Grid container gap={4}>
        <Grid item>
          <Box sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              // sx={{ maxHeight: "20rem" }}
              image={image.url}
              title={title}
            />
          </Box>
        </Grid>
        <Grid item gap={4}>
          <Typography variant="h4">{title}</Typography>
          <Box>
            <Typography>{formatCurrencyDirect(roundedPrice)}</Typography>
            <Typography>{discountPercent}%</Typography>
          </Box>
          <Button size="small" variant="outlined" onClick={handleAddToCart}>
            Add to cart
          </Button>
          <DescAccordion description={description} />
        </Grid>
      </Grid> */}
    </>
  );
}

export default ProductDetails;
