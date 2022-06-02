import * as React from "react";
import Head from "next/head";
import HomeLayout from "../public/src/HomeLayout";
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

export default function SignIn() {
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
    sx={{
      backgroundImage: "url(/assets/bg.jpg)",
      height: "100vh",
      width: "100vw",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Head>
              <title>Sign In</title>
            </Head>
            <Box>
              <Avatar
                height={25}
                width={25}
                sx={{ m: 3, bgcolor: "green" }}
              ></Avatar>
              <Typography component="h1" variant="h4">
                Sign in
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

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={signUp}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
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
SignIn.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
