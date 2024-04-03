import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../../services/store/store";
import { AppBar, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Container } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";
const pages = ["Cart", "Contact"];

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
            <Typography>Kaupa</Typography>

            {/* Mobile Nav */}
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
                    <Link
                      to={`/${page.toLowerCase()}`} // Adjust the `to` prop as needed
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Desktop Nav */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link
                  to={`/${page.toLowerCase()}`}
                  key={page}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    {page}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Link to="/cart">
              <Badge
                color="primary"
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
