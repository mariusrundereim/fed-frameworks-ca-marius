import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Box } from "@mui/material";
function Layout() {
  return (
    <>
      <Header />
      <Box padding="1rem">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
