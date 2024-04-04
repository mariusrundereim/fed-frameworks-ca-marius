import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function CheckoutPage() {
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <CheckCircleIcon fontSize="large" />
          <Typography variant="h4" fontWeight={"700"}>
            Payment Successful
          </Typography>
          <Typography>
            Your payment has been processed! Details of transaction are included
            below.
          </Typography>
          <Typography>Transaction Number: 457XgrT</Typography>
          <Box>
            <Box>
              <Typography textTransform={"uppercase"}>
                Total Amount Paid
              </Typography>
              <Typography>3409 NOK</Typography>
            </Box>
            <Box>
              <Typography textTransform={"uppercase"}>Payed by</Typography>
              <Typography>Vipps</Typography>
            </Box>
            <Box>
              <Typography textTransform={"uppercase"}>
                Transaction date
              </Typography>
              <Typography>04 April 2024, 08:00 AM</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default CheckoutPage;
