import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box
        component="footer"
        minHeight="10rem"
        sx={{
          flexGrow: 1,
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item md>
              Logo
            </Grid>
            <Grid item md={6}>
              Contact - Cart
            </Grid>
            <Grid item md>
              Build with React & MUI
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
