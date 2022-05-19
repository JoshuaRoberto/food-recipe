import * as React from "react";
import Head from "next/head";
import {
  Paper,
  Box,
  TextField,
  Link,
  Grid,
  Button,
  CssBaseline,
  Typography,
  Container,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const initialState = {
    email: "",
    password: "",
  };

  const signUp = () => {
    const admin = "admin@gmail.com";
    const password = "123";

    if (state.email === admin && state.password === password) {
      setOpen(true);
      setMessage({
        text: "Logged in Successfully",
        severity: "success",
      });

      console.log("Successful");
    } else if (state.email === "" && state.password === "") {
      setOpen(true);
      setMessage({
        text: "Please fill up the blanks!",
        severity: "error",
      });
    } else {
      setOpen(true);
      setMessage({
        text: "Wrong Email / Password",
        severity: "error",
      });
    }
  };
  const handleCLose = () => {
    setOpen(false);
  };
  const messageInitialState = {
    text: " ",
    severity: "error",
  };
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(initialState);
  console.log(state);

  const handleChange = (prop) => (e) => {
    setState((prevItem) => ({
      ...prevItem,
      [prop]: e.target.value,
    }));
  };

  return (
    <Box
      
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginBottom: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Head>
              <title>Sign Up</title>
            </Head>
            <Box>
              <Avatar sx={{ m: 2, bgcolor: "green" }}></Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
            </Box>
            <Paper
              elevation={3}
              sx={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                marginTop: "15px",
              }}
            >
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                </Grid>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange("email")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange("password")}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label=" Confirm Password"
                  type="Cpassword"
                  sx={{ marginTop: "12px" }}
                  onChange={handleChange("password")}
                />

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={signUp}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/sign-in" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              onClose={handleCLose}
              autoHideDuration={6000}
            >
              <Alert
                onClose={handleCLose}
                severity={message.severity}
                sx={{ width: "100%" }}
              >
                {message.text}
              </Alert>
            </Snackbar>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}