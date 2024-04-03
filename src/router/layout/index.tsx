import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
function Layout() {
  const appBarHeight = "100px";
  return (
    <>
      <Grid
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Grid sx={{ flexGrow: 1, pt: appBarHeight }}>
          <Outlet />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default Layout;
