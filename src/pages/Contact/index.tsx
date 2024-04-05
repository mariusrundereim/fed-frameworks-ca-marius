import ContactForm from "../../components/ContactForm";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import ContactDetails from "./components/ContactDetails";
function ContactPage() {
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <ContactDetails />
          <ContactForm />
        </Box>
      </Container>
    </>
  );
}

export default ContactPage;
