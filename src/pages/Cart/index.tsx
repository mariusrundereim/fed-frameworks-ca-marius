import { useStore } from "../../services/store/store";
import CartCard from "../../components/Cards/CartCard";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
function Cart() {
  const clearCart = useStore((state) => state.clearCart);
  const { cart } = useStore();
  const { products } = useStore();
  const calcTotalPrice = useStore((state) => state.totalPrice);
  const total = calcTotalPrice();
  return (
    <>
      <Typography variant="h4">Cart</Typography>
      <Box>
        <Button variant="contained" onClick={clearCart}>
          Clear cart
        </Button>
        <Link to="/checkout">
          <Button variant="contained">Checkout</Button>
        </Link>
      </Box>
      <Stack direction="column">
        {cart.map((item) => {
          const product = products.find((product) => product.id === item.id);
          if (product) {
            return <CartCard key={item.id} item={item} product={product} />;
          }
          return null;
        })}
      </Stack>
      <Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Typography variant="h5">Discount saved</Typography>
          <Typography variant="h5">{total} NOK</Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">{total} NOK</Typography>
        </Stack>
      </Box>
    </>
  );
}

export default Cart;
