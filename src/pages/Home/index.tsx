import { useEffect } from "react";
import { useStore } from "../../services/store/store";
import ProductCard from "../../components/Cards/ProductCard";
import SearchBar from "../../components/SearchBar";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

function Home() {
  const { products, fetchProducts } = useStore();
  useEffect(() => {
    fetchProducts().catch(console.error);
  }, []);

  return (
    <>
      <Box component="main">
        <SearchBar />
        <Typography variant="h4">Products</Typography>
        <Typography variant="h4">{products.length} items</Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item sm={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
