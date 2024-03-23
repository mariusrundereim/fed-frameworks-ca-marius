import { useStore } from "../../../services/store/store";
import { AppBar, Box, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Stack } from "@mui/material";
import BrandLogo from "../../Logo";
function Header() {
  const cartItemCount = useStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ minHeight: "50px" }}>
          <BrandLogo />
          <Stack spacing={1} direction="row">
            <Typography>Cart</Typography>
            <Badge
              color="secondary"
              badgeContent={cartItemCount}
              max={999}
              showZero
            >
              <ShoppingBagIcon color="action" />
            </Badge>
          </Stack>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
