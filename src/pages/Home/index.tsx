import React, { useEffect, useState } from "react";
import { useStore } from "../../services/store/store";
import ProductCard from "../../components/Cards/ProductCard";
import SearchBar from "../../components/SearchBar";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

function Home() {
  const { products, fetchProducts } = useStore();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const searchResults = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Box component="main">
        <SearchBar value={searchQuery} onChange={handleSearchChange} />

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Products</Typography>
          <Typography variant="h4">{products.length} items</Typography>
        </Stack>

        <Grid container spacing={4}>
          {searchResults.map((product) => (
            <Grid item sm={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
