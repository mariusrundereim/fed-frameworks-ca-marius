import { Link } from "react-router-dom";
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
        <AppBar
          position="fixed"
          color="primary"
          sx={{ minHeight: "50px", margin: "0 auto" }}
        >
          <Stack
            display="flex"
            justifyItems="center"
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            p="1rem"
            width="100%"
            sx={{ maxWidth: "1440px" }}
          >
            <BrandLogo />
            <Link to="/cart">
              <Stack spacing={1} direction="row">
                <Typography variant="body1">Cart</Typography>
                <Badge
                  color="secondary"
                  badgeContent={cartItemCount}
                  max={999}
                  showZero
                >
                  <ShoppingBagIcon color="action" fontSize="large" />
                </Badge>
              </Stack>
            </Link>
          </Stack>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
