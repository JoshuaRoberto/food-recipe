import { Typography, Box, Container, Button} from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";


import HomeLayout from "../public/src/HomeLayout";

export default function Home() {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/ba.jpg)",
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
            <Image src="/assets/hat.png" alt="user" width={600} height={400} />
          </Box>
        </Box>
      </Container>
      <Box>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontFamily: "Cursive", color:"white" }}
        >
          Giving the Best Food Recipe to the World
        </Typography>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={() => router.push("sampleres" )}>View Sample Recipe</Button>
        </Box>
      </Box>
    </Box>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};