import { useStore } from "../../services/store/store";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { formattedDate } from "../../utils/formatDate";
// Icons
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import EventIcon from "@mui/icons-material/Event";
function CheckOutList() {
  const checkoutTotal = useStore((state) => state.checkoutTotal);

  const listData = [
    { primary: "Transaction ID", secondary: "457XgrT", Icon: VerifiedUserIcon },
    {
      primary: "Total Amount Paid",
      secondary: `${checkoutTotal} NOK`,
      Icon: AccountBalanceWalletIcon,
    },
    { primary: "Payed by", secondary: "Vipps", Icon: PaymentIcon },
    {
      primary: "Transaction date",
      secondary: formattedDate,
      Icon: EventIcon,
    },
  ];

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
