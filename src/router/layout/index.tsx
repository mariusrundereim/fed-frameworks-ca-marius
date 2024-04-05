import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
function Layout() {
  return (
    <>
      <Grid
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Grid
          sx={{
            flexGrow: 1,
            mb: 6,
            mt: 10,
          }}
        >
          <Outlet />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default Layout;
