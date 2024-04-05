import { useState } from "react";
import { Product } from "../../services/store/store";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
interface SearchNewProps {
  placeholder: string;
  data: Product[];
}

function SearchBarNew({ placeholder, data }: SearchNewProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchProductText = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title
        .toLowerCase()
        .includes(searchProductText.toLowerCase());
    });

    if (searchProductText === "") {
      setFilteredProducts([]);
    }
    setFilteredProducts(newFilter);
  };
  return (
    <>
      <Box marginTop={"20px"} component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-search"
          label={placeholder}
          onChange={handleFilter}
          fullWidth
        />
      </Box>
      {filteredProducts.length != 0 && (
        <Paper
          elevation={6}
          sx={{
            padding: "4px",
            minHeight: "2rem",
            maxHeight: "12rem",
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          {filteredProducts.map((value) => {
            return (
              <Box
                key={value.id}
                sx={{
                  cursor: "default",
                  position: "relative",
                  zIndex: "2222222",
                  padding: "3px 7px",
                  "&:hover": { background: "lightgrey" },
                }}
              >
                <Typography variant="body1">
                  <Link
                    to={`/${value.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {value.title}
                  </Link>
                </Typography>
              </Box>
            );
          })}
        </Paper>
      )}
    </>
  );
}

export default SearchBarNew;
