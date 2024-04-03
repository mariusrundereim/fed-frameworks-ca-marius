import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function BrandLogo() {
  const logoUrl = "../../../public/brand_logo_white.svg";
  return (
    <Link to="/">
      <Box component="img" sx={{ height: 40 }} alt="Logo" src={logoUrl} />
    </Link>
  );
}

export default BrandLogo;
