import { useStore } from "../../services/store/store";
import CartCard from "../../components/Cards/CartCard";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Cart() {
  const theme = useTheme();
  const clearCart = useStore((state) => state.clearCart);
  const { cart } = useStore();
  const { products } = useStore();

  const totalBeforeDiscount = useStore((state) => state.totalBeforeDiscount)();
  const discountSaved = useStore((state) => state.totalDiscountSaved)();
  const total = useStore((state) => state.totalPrice)();
  return (
    <>
      <Box maxWidth="860px" margin="0 auto">
        <Typography variant="h4">Shopping Cart</Typography>

        <Paper elevation={6}>
          {cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            if (product) {
              return <CartCard key={item.id} item={item} product={product} />;
            }
            return null;
          })}
        </Paper>
        <Paper
          elevation={4}
          sx={{
            padding: "1rem",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Typography variant="h6">Discount saved</Typography>
            <Typography variant="h6" sx={{ textDecoration: "line-through" }}>
              {discountSaved} NOK
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Typography variant="h6">Total before discount:</Typography>
            <Typography variant="h6">{totalBeforeDiscount} NOK</Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">{total} NOK</Typography>
          </Stack>
        </Paper>
        <Box>
          <Link to="/">
            <Button variant="outlined" startIcon={<ArrowBackIosIcon />}>
              Continue Shopping
            </Button>
          </Link>
          <Button variant="contained" onClick={clearCart}>
            Clear cart
          </Button>
          <Link to="/checkout">
            <Button variant="contained">Checkout</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Cart;
