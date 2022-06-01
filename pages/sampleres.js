import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  DialogContentText,
  DialogActions,
  DialogContent,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import HomeLayout from "../public/src/HomeLayout";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { useRouter } from "next/router";

export default function SampleRes() {
  const [open, setOpen] = useState(false);

  const setDrawerOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Recipe = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 30px;
    justify-content: space-evenly;
  `;
  const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    box-shadow: 0 3px 10px 0 #aaa;
  `;

  const CoverImage = styled.img`
    height: 100px;
    width: 100px;
  `;

  const RecipeName = styled.span`
    font-weight: bold;
    font-size: 25px;
    margin: 10px;
  `;
  const ViewRecipe = styled.span`
    font-size: 18px;
    font-weight: bold;
    border: solid 1px;
    border-radius: 4px;
    text-align: center;
    margin: 10px 0;
  `;

  return (
    <Box>
      <Head>
        <title>Sample Recipe</title>
      </Head>
      <Container>
        <Recipe>
          <RecipeContainer>
            <img src="/assets/adobo.jpg" width="800px" height="600px" />
            <RecipeName>Adobo</RecipeName>
            <Typography>   No list of Filipino food would be complete without adobo.A ubiquitous dish in every household in the Philippines,</Typography>
            <Typography>it's Mexican in origin. But Filipinos found that cooking meat (often chicken and pork) in vinegar, salt, garlic,</Typography>
            <Typography>pepper, soy sauce and other spices was a practical way to preserve it without refrigeration.</Typography>
            <Typography>This cooking style can be applied to different meats or even seafood.It's best sample it in a Filipino home. </Typography>
            <Typography></Typography>

            <Grid container spacing={2}>
              <Grid item  xs={4} sm>
                <Box>
                  <Typography variant="h5">Ingredients </Typography>
                  <Typography>2 tbsp canola oil</Typography>
                  <Typography>6 cloves garlic crushed</Typography>
                  <Typography>1 pc onion, sliced</Typography>
                  <Typography>1 kilogram chicken cut ups</Typography>
                  <Typography>2 tbsp vinegar</Typography>
                  <Typography>1/4 cup soy sauce</Typography>
                  <Typography>1 cup water</Typography>
                  <Typography>2 pcs bay leaves</Typography>
                  <Typography>1 tsp whole black peppercorns</Typography>
                  <Typography>1 cup chopped onions</Typography>
                  <Typography>, slightly crushed</Typography>
                  <Typography>2 pc Knorr chicken cubes</Typography>
                  <Typography>2 tbsp calamansi juice,</Typography>
                  <Typography>1 tsp brown sugar packed</Typography>
                  <Typography>Option: 1 cup kale or spinach</Typography>
                </Box>
              </Grid>

              <Grid item  xs={4} sm sx={{marginLeft:"-290px"}}>
                <Container component="main" maxWidth="xs">
                  <Box>
                   <Typography variant="h5">Cook </Typography>
                    <Typography variant="h6">Step 1</Typography>
                    <Typography>Heat oil in pan and sauté garlic and onions.Then add chicken to the</Typography>
                    <Typography>pan and sear on all sides,until you have a little browning in the chicken skin. </Typography>
                    <Typography variant="h6">Step 2</Typography>
                    <Typography>Pour in vinegar, soy sauce and water.Add bay leaves, pepper and Knorr </Typography>
                    <Typography> Chicken Cubes. Bring to a boil over high heat then reduce heat to </Typography>
                    <Typography>simmer, but do not cover the pan. Continue to simmer for 10 mins.</Typography>
                    <Typography variant="h6">Step 3</Typography>
                    <Typography>Remove chicken pieces from sauce and fry in another pan until nicely browned.</Typography>
                    <Typography variant="h6">Step 4</Typography>
                    <Typography>Put back fried chicken pieces into sauce. Add sugar and let simmer </Typography>
                    <Typography>again for another 10 minutes or until sauce has thickened. Serve warm.</Typography>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </RecipeContainer>

          <RecipeContainer>
            <img src="/assets/Sisig.jpg" width="800px" height="600px" />
            <RecipeName>Pork Sisig</RecipeName>
            <Grid container>
              <Grid item xs>
                <Box>
                <Typography variant="h5">Ingredients </Typography>
                  <Typography>2 kg whole pork liempo </Typography>
                  <Typography>(lechon kawali cut)</Typography>
                  <Typography>1 tbsp rock salt</Typography>
                  <Typography>2 pcs onion, cut into wedges</Typography>
                  <Typography>water, enough to cover pork</Typography>
                  <Typography>water, enough to cover pork</Typography>
                  <Typography>canola oil (for deep frying)</Typography>
                  <Typography>2 tbsp chopped garlic</Typography>
                  <Typography>1/2 kg chicken liver,</Typography>
                  <Typography>cut into small cubes</Typography>
                  <Typography>1 cup chopped onions</Typography>
                  <Typography>3 -4 pcs green chillies, sliced</Typography>
                  <Typography>2 -4 tbsp Knorr Seasoning</Typography>
                  <Typography>2 tbsp calamansi juice,</Typography>
                  <Typography>ground black pepper to taste</Typography>
                </Box>
              </Grid>

              <Grid item xs sx={{marginLeft:"-290px"}}>
                <Container component="main" maxWidth="xs">
                  <Box>
                  <Typography variant="h5">Cook </Typography>
                    <Typography variant="h6">Step 1</Typography>
                    <Typography>Let's begin by getting a pot and filling it with water then add salt,</Typography>
                    <Typography>onion wedges and the pork belly or lechon kawali. Cook until tender.</Typography>
                    <Typography>Drain from the water and set aside on a plate or tray to cool and air-dry.</Typography>
                    <Typography variant="h6">Step 2</Typography>
                    <Typography>Get a shallow pan and make it nice and hot. Pour enough oil and deep fry</Typography>
                    <Typography>tenderized pork until crisp and golden brown. Let cool and chop coarsely.</Typography>
                    <Typography variant="h6">Step 3</Typography>
                    <Typography>Using another pan, throw in the garlic and liver. Saute until fully cooked.</Typography>
                    <Typography variant="h6">Step 4</Typography>
                    <Typography>Off heat, toss in the onions, chopped crispy pork and green chillies.</Typography>
                    <Typography>Season with more Knorr Liquid Seasoning, calamansi juice and pepper.</Typography>
                    <Typography>And that's it! Prepare to eat more than usual for you will find yourself</Typography>
                    <Typography>falling in love with the goodness of this Crispy Sisig!</Typography>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </RecipeContainer>

          <RecipeContainer>
            <img src="/assets/Bulalo.jpg"  width="800px" height="600px" />
            <RecipeName>Bulalo</RecipeName>
            <Grid container>
              <Grid item xs>
                <Box>
                <Typography variant="h5">Ingredients </Typography>
                  <Typography>3/4 kg bulalo </Typography>
                  <Typography>water to cover</Typography>
                  <Typography>2 pcs onions, quartered</Typography>
                  <Typography>1 head garlic, mashed</Typography>
                  <Typography>1 tbsp black peppercorns</Typography>
                  <Typography>4 cups broth</Typography>
                  <Typography>2 pcs Knorr Beef Cubes</Typography>
                  <Typography>siling labuyo or hot sauce</Typography>
                  <Typography>3 pcs potatoes, quartered</Typography>
                  <Typography>1/2 kg noodles, cooked</Typography>
                  <Typography>1 bunch pechay, trimmed</Typography>
                 
                </Box>
              </Grid>

              <Grid item xs sx={{marginLeft:"-290px"}}>
                <Container component="main" maxWidth="xs">
                  <Box>
                  <Typography variant="h5">Cook </Typography>
                    <Typography variant="h6">Step 1</Typography>
                    <Typography>Let’s begin by cooking our bulalo until tender. All you need to do is bring</Typography>
                    <Typography>a pot filled with water, onions, garlic, pepper and beef to a boil then simmer until</Typography>
                    <Typography>the beef is very tender. Pour more water if needed.Remember to skim the top</Typography>
                    <Typography>of the liquid and remove the scum that appear on top of the water to keep the broth clear.</Typography>
                    <Typography variant="h6">Step 2</Typography>
                    <Typography>Once the beef is nice and tender. Remove it from the boiling liquid and drop</Typography>
                    <Typography> Knorr Beef Cubes, siling labuyo or hot sauce next before adding the potatoes</Typography>
                    <Typography> Now, bring this to a simmer. Once the potatoes are cooked, place the pechay in.</Typography>
                    <Typography variant="h6">Step 3</Typography>
                    <Typography>Place the cooked noodles in a large bowl. Gently add the cooked bulalo and other</Typography>
                    <Typography>ingredients in and pour the hot broth. Finally, that’s our dish!</Typography>
                    <Typography variant="h6">Step 4</Typography>
                    <Typography>Spicy Bulalo Noodles will definitely make your day! So, don’t be selfish</Typography>
                    <Typography>Spread the joy by sharing this dish with your loved ones. The more happy hearts, the merrier!</Typography>
                    
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </RecipeContainer>

          <RecipeContainer>
            <img src="/assets/Tinola.jpg"  width="800px" height="600px" />
            <RecipeName>Tinola</RecipeName>
            <Grid container>
              <Grid item xs>
                <Box>
                <Typography variant="h5">Ingredients </Typography>
                  <Typography>1 tbsp cooking oil </Typography>
                  <Typography>1 pc onion,small</Typography>
                  <Typography>-sized,chopped</Typography>
                  <Typography>2 cloves garlic, chopped</Typography>
                  <Typography>1 pc ginger, cut into strips</Typography>
                  <Typography>½ kilo chicken, cut into 8 pcs</Typography>
                  <Typography>4 cups water</Typography>
                  <Typography>2 pcs Knorr chicken cubes</Typography>
                  <Typography>1 pc chayote or 1 pc small</Typography>
                  <Typography>- sized green papaya, sliced</Typography>
                  <Typography>2 stalks moringa leaves</Typography>
    
                </Box>
              </Grid>

              <Grid item xs sx={{marginLeft:"-290px"}}>
                <Container component="main" maxWidth="xs">
                  <Box>
                  <Typography variant="h5">Cook </Typography>
                    <Typography variant="h6">Step 1</Typography>
                    <Typography>Get a pot and bring it up to medium heat before pouring in the oil. </Typography>
                    <Typography>Drop in the onions, garlic and ginger and sauté slowly for about 2 minutes </Typography>
                    <Typography>or until you can smell the lovely aroma.</Typography>
                    <Typography variant="h6">Step 2</Typography>
                    <Typography>It’s time to drop in the chicken pieces and stir until it turns white or light brown in color.</Typography>
                    <Typography variant="h6">Step 3</Typography>
                    <Typography>Pour in the water and add your Knorr Chicken Broth cubes.Bring this to </Typography>
                    <Typography>a simmer until chicken is tender and cooked through.</Typography>
                    <Typography variant="h6">Step 4</Typography>
                    <Typography>You can now add your sayote or green papaya and cook until tender.</Typography>
                    <Typography variant="h6">Step 5</Typography>
                    <Typography>Dahon ng sili is added at the last stage to ensure leaves (and nutrients)</Typography>
                    <Typography> don’t dry up.Give this a minute then it is done. Malunggay is also   </Typography>
                    <Typography>another healthy alternative because it is packed with vitamins and  </Typography>
                    <Typography> minerals which are good for nursing moms and kids as well.</Typography>
                    <Typography variant="h6">Step 6</Typography>
                    <Typography>Enjoy this with patis and calamansi on the side. See the faces of your</Typography>
                    <Typography>  whole family light up as you bring this to the table.</Typography>
                    
                  </Box>
                </Container>
              </Grid>
            </Grid>
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
        }}
      >
         <Button
              variant="contained"
              color="primary"
              onClick={setDrawerOpen}
            >
              View All Recipe
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{"Do you want more Recipe?"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please Sign In!
                </DialogContentText>
              </DialogContent>
            
                <Button  variant="contained" alignItems="center" onClick={() => router.push("sign-in" )}>
                 Sign-In
                </Button>
              
            </Dialog>
      </Box>
    </Box>
  );
}

SampleRes.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
