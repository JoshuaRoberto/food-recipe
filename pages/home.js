import { Typography, Box, Container, Button} from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";


import HomeLayout from "../public/src/HomeLayout";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/BG.jpg)",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>Home</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ mt: 10 }}>
            <Image src="/assets/homeBG.jpg" alt="user" width={200} height={200} />
          </Box>
        </Box>
      </Container>
      <Box>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontFamily: "Cursive" }}
        >
          Giving Light to the World
        </Typography>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={() => router.push("product" )}>View All Products</Button>
        </Box>
      </Box>
    </Box>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};