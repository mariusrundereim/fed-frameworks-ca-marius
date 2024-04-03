import ContactForm from "../../components/ContactForm";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
function ContactPage() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4">Contact</Typography>
        <ContactForm />
      </Container>
    </>
  );
}

export default ContactPage;
