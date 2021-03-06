import { Typography, Box, Grid, Paper } from '@mui/material'
import Head from "next/head";
import React from 'react'
import AdminLayout from '../public/src/AdminLayout'

export default function Dashboard() {

  const style ={ 
    paper1: {
      padding:"24px",
    },
  };
  return (
    <Box sx={{padding:" 0 30px", marginTop:"100px"}}>
      <Head>
        <title> Admin-Dashboard</title>
      </Head>
    <Grid container spacing={2} >
      <Grid item  xs={4} sm>
        <Paper >
          <Typography variant= "h4">Users</Typography>
          <Typography variant="h2">100</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4} sm> 
        <Paper >
          <Typography variant="h4">Recipe</Typography>
          <Typography variant="h2">100</Typography>
        </Paper>
      </Grid>
    </Grid>
   
    
    </Box>
    
  );
}

Dashboard.getLayout = function getLayout(page){
return <AdminLayout>{page}</AdminLayout>

}