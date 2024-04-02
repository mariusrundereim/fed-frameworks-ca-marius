import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box
        component="footer"
        minHeight="10rem"
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          flexGrow: 1,
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.dark,
        }}
      >
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
      </Box>
    </>
  );
}

export default Footer;
