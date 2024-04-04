import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// Icons
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import EventIcon from "@mui/icons-material/Event";

const listData = [
  { primary: "Transaction ID", secondary: "457XgrT", Icon: VerifiedUserIcon },
  {
    primary: "Total Amount Paid",
    secondary: "3409 NOK",
    Icon: AccountBalanceWalletIcon,
  },
  { primary: "Payed by", secondary: "Vipps", Icon: PaymentIcon },
  {
    primary: "Transaction date",
    secondary: "04 April 2024, 08:00 AM",
    Icon: EventIcon,
  },
];

function CheckOutList() {
  return (
    <Box p={{ sm: 0, md: 4 }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Transaction Details
      </Typography>
      <Box>
        <List>
          {listData.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <item.Icon />
              </ListItemIcon>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default CheckOutList;
