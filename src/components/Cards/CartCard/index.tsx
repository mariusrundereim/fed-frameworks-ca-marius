import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
function CartCard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            p: 1,
            width: "100%",
            direction: "row",
          },
        }}
      >
        <Paper>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">Product Title</Typography>
            <Box display="flex" alignItems="center" gap="1.5rem">
              <ButtonGroup
                variant="contained"
                size="small"
                aria-label="Basic button group"
              >
                <Button>-</Button>
                <Button variant="outlined">4</Button>
                <Button>+</Button>
              </ButtonGroup>
              <Typography variant="body1">240 NOK</Typography>
              <Typography variant="body1">299 NOK</Typography>
              <DeleteIcon />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default CartCard;
