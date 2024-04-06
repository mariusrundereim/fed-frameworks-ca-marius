import { useEffect } from "react";
import { useStore } from "../../services/store/store";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import Hero from "./components/Hero";
import ProductCard from "../../components/Cards/ProductCard";
function Home() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container direction={"column"} gap={4}>
          <Grid item>
            <Hero />
          </Grid>
          <Grid item>
            <Typography variant="h4" fontWeight={"600"}>
              Products ({products.length})
            </Typography>
          </Grid>

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
        </Grid>
      </Container>
    </>
  );
}

export default Home;
