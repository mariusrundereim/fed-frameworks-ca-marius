import { useStore } from "../../../services/store/store";
import { CartItem } from "../../../services/store/store";

import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
interface CartCardProps {
  item: CartItem;
}

function CartCard({ item }: CartCardProps) {
  const { price, quantity } = item;
  const product = useStore.getState().getProduct(item.id);
  const deleteItem = useStore((state) => state.removeProductFromCart);
  const handleDeleteItem = () => deleteItem(item.id);

  //Quantity
  const increaseQty = useStore((state) => state.increaseQuantity);
  const decreaseQty = useStore((state) => state.decreaseQuantity);

  const handleIncreaseQty = () => increaseQty(item.id);
  const handleDecreaseQty = () => decreaseQty(item.id);
  return (
    <>
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            p: 1,
            width: "100%",
            direction: "row",
          },
        }}
      >
        <Paper>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">
              {product?.title || "Title missing"}
            </Typography>
            <Box display="flex" alignItems="center" gap="1.5rem">
              <ButtonGroup
                variant="contained"
                size="small"
                aria-label="Basic button group"
              >
                <Button onClick={handleDecreaseQty}>-</Button>
                <Button variant="outlined">{quantity}</Button>
                <Button onClick={handleIncreaseQty}>+</Button>
              </ButtonGroup>
              <Typography variant="h4">{price * quantity}</Typography>
              <DeleteIcon onClick={handleDeleteItem} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default CartCard;
