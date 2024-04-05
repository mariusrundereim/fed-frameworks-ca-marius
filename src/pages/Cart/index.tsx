import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStore } from "../../services/store/store";
import CartCard from "../../components/Cards/CartCard";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { formatCurrencyDirect } from "../../utils/formatCurrency";
function Cart() {
  const theme = useTheme();
  const navigate = useNavigate();
  const clearCart = useStore((state) => state.clearCart);
  const checkout = useStore((state) => state.handleCheckout);

  const onCheckout = () => {
    checkout();
    navigate("/checkout");
  };
  const { cart } = useStore();
  const { products } = useStore();

  const totalBeforeDiscount = useStore((state) => state.totalBeforeDiscount)();
  const discountSaved = useStore((state) => state.totalDiscountSaved)();
  const total = useStore((state) => state.totalPrice)();
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              {/* Cart Container */}
              <Paper elevation={0}>
                {cart.length === 0 ? (
                  <Box>
                    <p>Empty cart</p>
                  </Box>
                ) : (
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    if (product) {
                      return (
                        <CartCard key={item.id} item={item} product={product} />
                      );
                    }
                    return null;
                  })
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* Discount + Total */}
              <Paper
                sx={{
                  padding: "1rem",
                  backgroundColor: theme.palette.success.light,
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Discount</Typography>
                  <Typography variant="h6">
                    {formatCurrencyDirect(discountSaved)}
                  </Typography>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Price</Typography>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {formatCurrencyDirect(totalBeforeDiscount)}
                  </Typography>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">
                    {formatCurrencyDirect(total)}
                  </Typography>
                </Stack>
              </Paper>
              {/* Cart Nav */}
              <Box display={"flex"} flexDirection={"column"} gap={1} mt={4}>
                <Link to="/">
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBackIosIcon />}
                    fullWidth
                  >
                    Continue Shopping
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  onClick={clearCart}
                  startIcon={<ClearAllIcon />}
                  fullWidth
                >
                  Clear cart
                </Button>
                <Button variant="contained" fullWidth onClick={onCheckout}>
                  Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Cart;
