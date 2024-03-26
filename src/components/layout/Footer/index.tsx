import { Box } from "@mui/material";
function Footer() {
  return (
    <>
      <Box
        component="footer"
        minHeight="10rem"
        width="100%"
        display="flex"
        alignItems="center"
        sx={{ border: "2px solid grey" }}
      >
        Foo
      </Box>
    </>
  );
}

export default Footer;
