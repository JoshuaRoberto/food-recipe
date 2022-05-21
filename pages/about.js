import { Typography, Box, Container, Button} from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";


import HomeLayout from "../public/src/HomeLayout";

export default function About() {
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
          <Box sx={{ mt: 10 }}>
            <Image src="/assets/hat.png" alt="user" width={600} height={400} />
          </Box>
        </Box>
      </Container>
      <Box>
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" sx={{fontFamily:'cursive', fontWeight:'bold'}}>ABOUT</Typography>
        <Typography variant= "h5" sx={{marginTop:"20px" , fontWeight:'bold'}}>    Chan's Candle is all about care and quality. We produce long-lasting and quality candles. We have</Typography>
        <Typography variant= "h5" sx={{ fontWeight:'bold'}}>Procession candles, colored Tomb candles, Decorative candles, Glass candles, and Esperma candles. </Typography>
        <Typography variant= "h5" sx={{ fontWeight:'bold'}}>We make them all.</Typography>
        <Typography variant= "h5" sx={{marginTop:"20px" , fontWeight:'bold'}}>Finding and buying long-lasting and cheap candles online is no longer a problem with</Typography>
        <Typography variant= "h5" sx={{ fontWeight:'bold'}}>Chan's Cande</Typography>  
        <Typography variant= "h5" sx={{ fontWeight:'bold' , marginTop: "50px"}}>LOCATION: Viola St.Old Sta. Rita San Miguel Bulacan</Typography>  

      </Box>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={() => router.push("product" )}>View Sample Recipe</Button>
        </Box>
      </Box>
    </Box>
  );
}

About.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};