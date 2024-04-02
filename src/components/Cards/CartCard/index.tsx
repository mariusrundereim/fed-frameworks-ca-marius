import { Product } from "../../../services/store/store";
import { useStore } from "../../../services/store/store";
import { CartItem } from "../../../services/store/store";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
interface CartCardProps {
  item: CartItem;
  product: Product;
}

function useCartItemActions(itemId: string) {
  const deleteItem = useStore((state) => state.removeProductFromCart);
  const increaseQty = useStore((state) => state.increaseQuantity);
  const decreaseQty = useStore((state) => state.decreaseQuantity);
  const getQuantity = useStore((state) => state.getQuantity);

  const handleDeleteItem = () => deleteItem(itemId);
  const handleIncreaseQty = () => increaseQty(itemId);
  const handleDecreaseQty = () => {
    const currentQuantity = getQuantity(itemId);
    if (currentQuantity > 1) {
      decreaseQty(itemId);
    }
  };

  return { handleDeleteItem, handleIncreaseQty, handleDecreaseQty };
}

function CartCard({ item, product }: CartCardProps) {
  const { quantity } = item;
  const { roundedDiscPrice } = product;
  const { handleDeleteItem, handleIncreaseQty, handleDecreaseQty } =
    useCartItemActions(item.id);

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
              <Link
                to={`/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {product?.title || "Title missing"}
              </Link>
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
              <Typography variant="h5">
                Price: {roundedDiscPrice} NOK
              </Typography>
              <DeleteIcon onClick={handleDeleteItem} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default CartCard;
