import React, { useEffect, useState } from "react";
import { useStore } from "../../services/store/store";
import ProductCard from "../../components/Cards/ProductCard";
import SearchBar from "../../components/SearchBar";
import { Grid } from "@mui/material";
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
      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Products</Typography>
        <Typography variant="h4">{searchResults.length} items</Typography>
      </Stack>

      {searchResults.length > 0 ? (
        <Grid container component="section" spacing={{ xs: 1, sm: 3, md: 4 }}>
          {searchResults.map((product) => (
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
      ) : (
        <Typography variant="h6" style={{ marginTop: 20 }}>
          No products found
        </Typography>
      )}
    </>
  );
}

export default Home;
