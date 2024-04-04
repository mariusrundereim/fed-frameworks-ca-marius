import { useEffect } from "react";
import { useStore } from "../../services/store/store";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material";
import CheckOutList from "../../components/List";
function CheckoutPage() {
  const theme = useTheme();
  const clearCart = useStore((state) => state.clearCart);

  // This effect runs when the component is unmounted
  useEffect(() => {
    // When the component unmounts, clear the cart
    return () => clearCart();
  }, [clearCart]); // clearCart is a dependency of this effect

  return (
    <>
      <Container maxWidth="xl">
        <Box component={"section"}>
          <Box display={"flex"} flexDirection={{ sm: "column", md: "row" }}>
            <Box
              sx={{
                backgroundColor: theme.palette.success.main,
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                borderRadius: theme.shape.borderRadius,
              }}
            >
              <CheckCircleIcon fontSize="large" />
              <Typography variant="h4" fontWeight={"700"}>
                Payment Successful
              </Typography>
              <Typography>Your payment has been processed!</Typography>
              <Typography>
                Details of transaction are included below.
              </Typography>
            </Box>
            <CheckOutList />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default CheckoutPage;
