import { useStore } from "../../services/store/store";
import CartCard from "../../components/Cards/CartCard";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
function Cart() {
  const clearCart = useStore((state) => state.clearCart);
  const { cart } = useStore();
  const calcTotalPrice = useStore((state) => state.totalPrice);
  const total = calcTotalPrice();
  return (
    <>
      <Typography variant="h4">Cart</Typography>
      <Box>
        <Button variant="contained" onClick={clearCart}>
          Clear cart
        </Button>
        <Button variant="contained">Checkout</Button>
      </Box>
      <Stack direction="column">
        {cart.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </Stack>
      <Typography variant="h4">{total} NOK</Typography>
    </>
  );
}

export default Cart;
