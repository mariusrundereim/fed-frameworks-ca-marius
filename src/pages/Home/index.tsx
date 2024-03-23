import { useEffect } from "react";
import { useStore } from "../../services/store/store";
import ProductCard from "../../components/Cards/ProductCard";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import SearchBar from "../../components/SearchBar";
function Home() {
  const { products, fetchProducts, totalPrice } = useStore();
  useEffect(() => {
    fetchProducts().catch(console.error);
  }, []);

  return (
    <>
      <Box component="main">
        <SearchBar />
        <h3>Total Price: ${totalPrice()}</h3>
        <h2>Products</h2>
        <Grid component="section" container>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
