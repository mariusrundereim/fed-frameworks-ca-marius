import { useEffect } from "react";
import { useStore } from "../../services/store/store";
import ProductCard from "../../components/Cards/ProductCard";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import SearchBarNew from "../../components/Search";
import { Container } from "@mui/material";
function Home() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <SearchBarNew placeholder="Search.." data={products} />

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Products</Typography>
          <Typography variant="h4">{products.length} items</Typography>
        </Stack>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={product.id}
              sx={{
                minWidth: "100px",
                maxWidth: "1",
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
