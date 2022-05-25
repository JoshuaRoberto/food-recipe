import { Typography, Box, Container, Button} from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import HomeLayout from "../public/src/HomeLayout";
import styled from "@emotion/styled";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { useState } from "react";
export  default function SampleRes() {
  const [open, setOpen] = useState(false);
  const setDrawerOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const Container = styled.div` 
display: flex;
flex-direction: column;
`;
const Recipe = styled.div `
display:flex;
flex-direction: row;
flex-wrap:wrap;
padding: 30px;
gap: 30px;
justify-content: space-evenly;
`;
const RecipeContainer = styled.div `
display: flex;
flex-direction: column;
padding: 10px;

box-shadow: 0 3px 10px 0 #aaa;

`;

const CoverImage = styled.img ` 
height: 200px;
width: 150px;

`;

const RecipeName = styled.span`
font-weight:bold;
font-size:18px;
margin: 10px;

`;
const ViewRecipe = styled.span` 
font-size: 18px;
font-weight: bold;
border: solid 1px;
border-radius: 4px;
text-align:center;
margin: 10px 0 ;
`;


    
  return (
    <Box>
      <Head>
        <title>Sample Recipe</title>
      </Head>
    <Container>
        <Recipe>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu Malala</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu Malala</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu Malala</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu Malala</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>


        </Recipe>

    </Container>
    <Box
    sx={{
      marginTop: 3,
      marginBottom: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Set backup account</DialogTitle>
      <Typography>Ang Ganda Ni Lyca Deleon</Typography>
      <Typography>Ang Ganda mo Bhieeee </Typography>
      </Dialog>
    <Button  onClick={setDrawerOpen} variant="contained">View All Recipe</Button>
      </Box> 
    </Box>
  );
}
 

SampleRes.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};