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
        sx={{
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.primary.light,
          minHeight: "25rem",
        }}
      >
        <SearchBarNew placeholder="Search.." data={products} />
        <Box>
          <Typography variant="h3">Your One-Stop-Shop</Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea
            aut, quae sit ipsam optio aliquid commodi sapiente iste dolorem
            nostrum fugit expedita?
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
