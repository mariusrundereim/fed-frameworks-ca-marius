import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
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
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={value}
          onChange={onChange}
        />
      </Box>
    </>
  );
}

export default SearchBar;
