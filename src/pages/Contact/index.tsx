import ContactForm from "../../components/ContactForm";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import ContactDetails from "./components/ContactDetails";
function ContactPage() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid>
          <ContactDetails />
          <ContactForm />
        </Grid>
      </Container>
    </>
  );
}

export default ContactPage;
