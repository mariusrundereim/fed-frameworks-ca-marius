import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

interface FormData {
  firstName: string;
  subject: string;
  email: string;
  body: string;
}

function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <Grid container direction={"column"} gap={3} width={"500px"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  label="First Name"
                  onChange={field.onChange}
                  value={field.value}
                  helperText={errors.firstName?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="subject"
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  label="Subject"
                  onChange={field.onChange}
                  value={field.value}
                  helperText={errors.subject?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  label="Email"
                  onChange={field.onChange}
                  value={field.value}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="body"
              rules={{ required: "Text is required" }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  label="Message"
                  onChange={field.onChange}
                  value={field.value}
                  helperText={errors.body?.message}
                />
              )}
            />
            <Button variant="outlined" type="submit" sx={{ marginTop: "2rem" }}>
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default ContactForm;
