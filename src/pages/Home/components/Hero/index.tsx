import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import SearchBarNew from "../../../../components/Search";
import { useStore } from "../../../../services/store/store";
function Hero() {
  const theme = useTheme();
  const { products } = useStore();
  return (
    <>
      <Box
        component={"section"}
        p={2}
        sx={{
          borderRadius: "16px",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={"600"}>
            Online E-Commerce Store
          </Typography>
          <Typography variant="h6">
            Discover an exquisite selection of fashion, cutting-edge
            electronics, playful toys, and essential accessories.
          </Typography>
        </Box>
        <SearchBarNew placeholder="Search.." data={products} />
      </Box>
    </>
  );
}

export default Hero;
