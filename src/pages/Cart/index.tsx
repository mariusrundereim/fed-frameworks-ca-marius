import CartCard from "../../components/Cards/CartCard";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useStore } from "../../services/store/store";
function Cart() {
  const clearCart = useStore((state) => state.clearCart);
  return (
    <>
      <h2>Cart page!</h2>
      <Box>
        <Typography variant="h5">Clear Cart:</Typography>
        <Button variant="contained" onClick={clearCart}>
          Clear cart
        </Button>
      </Box>
      <CartCard />
    </>
  );
}

export default Cart;
