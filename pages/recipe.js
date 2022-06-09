import { Typography, Box } from '@mui/material'
import Head from "next/head";
import React from 'react'
import UserLayout from '../public/src/UserLayout';
import styled from "@emotion/styled";
export default function Recipe() {


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
height: 50px;
width: 50px;

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
        <title>Recipe</title>
      </Head>
    <Container>
    
        <Recipe>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>

            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>
            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>
            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>
            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>
            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>
            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>
            <RecipeContainer>
            <img src="/assets/tofu.avif"/>
            <RecipeName>Tofu</RecipeName>
            <ViewRecipe>View Recipe</ViewRecipe>
            </RecipeContainer>



        </Recipe>
    </Container>

    </Box>
    
  );
}
Recipe.getLayout = function getLayout(page){
return <UserLayout >{page}</UserLayout>

}