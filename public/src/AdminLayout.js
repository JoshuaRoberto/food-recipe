import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const setDrawerOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const drawerToPage = (url) => {
    setOpen(false);
    router.push(url);
  };

  return (
    <Box>
      <Head>
        <title> Admin-Dashboard</title>
      </Head>
      <AppBar sx={{color:"#FCF69C",backgroundColor:"#1D5C63"}}>
        <Toolbar>
          <IconButton onClick={setDrawerOpen}>
            <Image src="/assets/bars.svg" alt="bars" width={30} height={30} />
          </IconButton>
          <Typography
            variant="h5"
            sx={{ marginLeft: "12px", fontWeight: "700" }}
          >
            Chan's Candle
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          sx={{
            minWidth: "230px ",
            padding: " 15px ",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box>
            <Avatar sx={{ marginLeft: "70px", marginTop: "10px" }} />
          </Box>
          <Typography sx={{ marginLeft: "60px", marginTop: "12px" }}>
            Admin
          </Typography>
          <List sx={{ flexGrow: 1 }}>
            <Divider />

            <ListItem
              button
              onClick={() => drawerToPage("/dashboard")}
              sx={{ marginTop: "10px" }}
              selected={router.pathname.includes("dashboard")}
            >
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            

            <ListItem
              button
              onClick={() => drawerToPage("/customer")}
              sx={{ marginTop: "10px" }}
            >
              <ListItemIcon>
               
              </ListItemIcon>
              <ListItemText primary=" Users" />
            </ListItem>
            </List>

           
          <List>
            <Divider />
            <ListItem button onClick={() => drawerToPage("/home")}>
              <ListItemIcon>
                
               
              </ListItemIcon>
              <ListItemText primary="Sign-Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ marginTop: "60px" }}>{children}</Box>
    </Box>
  );
}
