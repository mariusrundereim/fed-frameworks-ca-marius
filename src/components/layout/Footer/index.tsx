import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box
        component="footer"
        sx={{
          minHeight: "6rem",
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container maxWidth="xl">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Typography fontWeight="500">Kaupa</Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Typography>Build with React & MUI</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
