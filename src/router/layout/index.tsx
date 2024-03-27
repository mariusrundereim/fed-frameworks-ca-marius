import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Box } from "@mui/material";
function Layout() {
  return (
    <>
      <Grid
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Header />
        <Box
          component="main"
          padding="1rem"
          margin="0 auto"
          marginTop={8}
          maxWidth="1440px"
          minWidth="100%"
          sx={{ flexGrow: 1 }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Grid>
    </>
  );
}

export default Layout;
