// import { useEffect } from "react";
// import { useStore } from "../../services/store/store";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material";
import CheckOutList from "../../components/List";
function CheckoutPage() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
        <Box component={"section"}>
          <Box>
            <Box
              sx={{
                backgroundColor: theme.palette.success.main,
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                borderRadius: 1,
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
