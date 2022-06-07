import { Typography, Box, Container, Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import HomeLayout from "../public/src/HomeLayout";

export default function About() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/ab.jpg)",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>About</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mt: 1 }}>
            <Image src="/assets/hat.png" alt="user" width={600} height={400} />
          </Box>
        </Box>
      </Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "cursive", fontWeight: "bold" }}
          >
            ABOUT
          </Typography>
          <Typography
            variant="h3"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontFamily: "Brush Script MT",
              color: "#EB5353",
            }}
          >
            {" "}
            Pinoy Cuisine Food Recipe
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {" "}
            Filipino food may not be as famous as that of its Thai and
            Vietnamese neighbors.{" "}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            But with more than 7,000 islands and a colorful history, this
            archipelago has some delicious dishes of its own.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Blessed with an abundance of seafood, tropical fruits and creative
            cooks,{" "}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {" "}
            there's more to Filipino food than the mind-boggling balut (duck
            embryo).{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={() => router.push("product")}>
            View Sample Recipe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

About.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
