import CartCard from "../../components/Cards/CartCard";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
function Cart() {
  return (
    <>
      <h2>Cart page!</h2>
      <Box>
        <Typography variant="h5">Remove:</Typography>
        <Button variant="contained">Remove</Button>
      </Box>
      <CartCard />
    </>
  );
}

export default Cart;
