import { Product } from "../../../services/store/store";
import { useStore } from "../../../services/store/store";
import { CartItem } from "../../../services/store/store";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
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
      <Paper>
        <Box
          component="article"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          padding={1}
          m={1}
          mb={2}
        >
          <Typography variant="h5">
            <Link
              to={`/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {product?.title || "Title missing"}
            </Link>
          </Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
          >
            <Box>
              <ButtonGroup
                variant="contained"
                size="small"
                aria-label="Basic button group"
                disableElevation
              >
                <Button onClick={handleDecreaseQty}>-</Button>
                <Button variant="outlined">{quantity}</Button>
                <Button onClick={handleIncreaseQty}>+</Button>
              </ButtonGroup>
            </Box>
            <Box
              display={"flex"}
              justifyItems={"flex-end"}
              alignItems={"center"}
              gap={2}
            >
              <Typography variant="h5">{roundedDiscPrice} NOK</Typography>
              <DeleteIcon onClick={handleDeleteItem} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default CartCard;
