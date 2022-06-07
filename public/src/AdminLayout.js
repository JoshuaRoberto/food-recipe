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
      <AppBar sx={{ color: "#FCF69C", backgroundColor: "white" }}>
        <Toolbar>
          <IconButton onClick={setDrawerOpen}>
            <Image src="/assets/bars.svg" alt="bars" width={30} height={30} />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontFamily: "Brush Script MT",
              color: "#EB5353",
            }}
          >
            Pinoy Cuisine Food Recipe
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
            <Avatar
              sx={{ marginLeft: "70px", marginTop: "10px", bgcolor: " green" }}
            />
          </Box>
          <Typography
            sx={{ marginLeft: "70px", marginTop: "12px", fontWeight: "bold" }}
          >
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
              <Image src="/assets/dashboard.svg" alt="bars" width={30} height={30} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem
              button
              onClick={() => drawerToPage("/customer")}
              sx={{ marginTop: "10px" }}
            >
              <ListItemIcon><Image src="/assets/profile.svg" alt="bars" width={30} height={30} /></ListItemIcon>
              <ListItemText primary=" Users" />
            </ListItem>

            <ListItem
              button
              onClick={() => drawerToPage("/Message")}
              sx={{ marginTop: "10px" }}
            >
              <ListItemIcon><Image src="/assets/message.svg" alt="bars" width={30} height={30} /></ListItemIcon>
              <ListItemText primary=" Messages" />
            </ListItem>
          </List>

          <List>
            <Divider />
            <ListItem button onClick={() => drawerToPage("/home")}>
              <ListItemIcon><Image src="/assets/sign-up.svg" alt="bars" width={30} height={30} /></ListItemIcon>
              <ListItemText primary="Sign-Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ marginTop: "60px" }}>{children}</Box>
    </Box>
  );
}
