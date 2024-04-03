import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../../services/store/store";
import { AppBar, Button, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BrandLogo from "../../Logo";
import { Container } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";
const pages = ["Home", "Cart", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Cart Item Count
  const cartItemCount = useStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <>
      <AppBar position="fixed" color="default" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <BrandLogo />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuSharp />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign={"center"}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Link to="/cart">
              <Badge
                color="secondary"
                badgeContent={cartItemCount}
                max={999}
                showZero
              >
                <ShoppingBagIcon color="action" fontSize="large" />
              </Badge>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
