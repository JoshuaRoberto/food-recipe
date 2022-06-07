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

export default function UserLay({ children }) {
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
        <title>User</title>
      </Head>
      <AppBar sx={{color:"#FCF69C",backgroundColor:"white"}} >
        <Toolbar>
          <IconButton onClick={setDrawerOpen}>
            <Image src="/assets/bars.svg" alt="dash" width={30} height={30} />
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
            <Avatar sx={{ marginLeft: "70px", marginTop: "10px", bgcolor:"green" }} />
          </Box>
          <Typography sx={{ marginLeft: "70px", marginTop: "12px", fontWeight:"bold"}}>
            User
          </Typography>
          <List sx={{ flexGrow: 1 }}>
            <Divider />

            <ListItem
              button
              onClick={() => drawerToPage("/profile")}
              sx={{ marginTop: "10px" }}
              selected={router.pathname.includes("profile")}
            >
              <ListItemIcon>
              <Image
                  src="/assets/profile.svg"
                  alt="user"
                  width="30"
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>

            <ListItem
              button
              onClick={() => drawerToPage("/purchase")}
              sx={{ marginTop: "10px" }}
            >
              <ListItemIcon>
              <Image
                  src="/assets/bookmark.svg"
                  alt="user"
                  width="30"
                  height={30}
                />
               
              </ListItemIcon>
              <ListItemText primary="Favorite" />
            </ListItem>


            <ListItem
              button
              onClick={() => drawerToPage("/product")}
              sx={{ marginTop: "10px" }}
            >
              <ListItemIcon>
              <Image
                  src="/assets/burger.svg"
                  alt="user"
                  width="30"
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary="View All Recipe" />
            </ListItem>

          </List>
          <List>
            <Divider />
            <ListItem button onClick={() => drawerToPage("/home")}>
              <ListItemIcon>
               
              <Image
                  src="/assets/sign-up.svg"
                  alt="user"
                  width="30"
                  height={30}
                />
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
