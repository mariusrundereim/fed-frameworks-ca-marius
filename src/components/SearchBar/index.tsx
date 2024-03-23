import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </>
  );
}

export default SearchBar;
