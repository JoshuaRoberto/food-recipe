import { Typography, Box, Container, Button, Grid, Paper , TextField , TextareaAutosize} from "@mui/material";
import Head from "next/head";
import React from "react";



import HomeLayout from "../public/src/HomeLayout";

export default function Contact() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/bg.jpg)",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>Contact</title>
      </Head>
      <Grid container>
        <Grid item xs>
          <Box>
            <Typography
              variant="h1"
              padding={10}
              sx={{ textAlign: "center", mt: 7 }}
            >
              Let's Chat.
            </Typography>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", marginTop: "-80px" }}
            >
              Tell me about your
            </Typography>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              question's.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Container component="main" maxWidth="xs">
            <Paper
              elevation={10}
              sx={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                marginTop: "60px",
                marginLeft: "-150px",
              }}
            >
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Typography variant="h5">Send me a Message</Typography>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Fullname"
                  type="Name"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  type="Email"
                  autoComplete="email"
                />
                <Typography variant="h5">Message</Typography>
                <TextareaAutosize></TextareaAutosize>
                <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

Contact.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};