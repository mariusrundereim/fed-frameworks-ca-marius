import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  padding: "6px 10px",
  transition: "300ms all",
  ":hover": {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },

  ":focus-visible": {
    outline: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export default StyledTypography;
