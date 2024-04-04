import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
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
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      subject: "",
      email: "",
      body: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" gap={4}>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: "First name is required",
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
            }}
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
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Must be a valid email address",
              },
            }}
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
            name="subject"
            rules={{
              required: "Subject is required",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters",
              },
            }}
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
            name="body"
            rules={{
              required: "Body is required",
              minLength: {
                value: 3,
                message: "Body must be at least 3 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="Message"
                onChange={field.onChange}
                value={field.value}
                helperText={errors.body?.message}
                multiline
              />
            )}
          />
          <Button variant="outlined" type="submit" sx={{ marginTop: "2rem" }}>
            Submit
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default ContactForm;
