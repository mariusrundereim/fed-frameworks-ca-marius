import { useStore } from "../../../services/store/store";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Stack } from "@mui/material";

function Header() {
  const cartItemCount = useStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <>
      <Box>
        <AppBar position="static">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuSharp />
          </IconButton>
          <Stack spacing={2} direction="row">
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
