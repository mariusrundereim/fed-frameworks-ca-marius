import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function BrandLogo() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography variant="h6" color="inherit" noWrap>
        {/* Place your logo here. An example with text: */}
        Your Logo
      </Typography>
    </Link>
  );
}

export default BrandLogo;
