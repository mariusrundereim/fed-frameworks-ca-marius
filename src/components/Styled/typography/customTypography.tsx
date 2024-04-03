import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  ":hover": {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
  },
}));

function StyledExample() {
  return <CustomTypography>Hover me</CustomTypography>;
}

export default StyledExample;
