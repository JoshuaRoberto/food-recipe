import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { useRouter } from "next/router"

export default function HomeLayout({ children }) {

  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton>
            <Image
              src="/assets/utensils.svg"
              alt="bars"
              width={30}
              height={30}
            />
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
          <Button
          onClick={() =>router.push("home" )}
            color="inherit"
            variant="h4"
            sx={{ marginRight: "15px", fontWeight: "bold", color: "black" }}
          >
            Home
          </Button>

          <Button
          onClick={() =>router.push("contact" )}
            color="inherit"
            variant="h4"
            sx={{ marginRight: "15px", fontWeight: "bold", color: "black" }}
          >
            Contact
          </Button>
          
          <Button
          onClick={() =>router.push("about" )}
            color="inherit"
            variant="h4"
            sx={{ marginRight: "15px", fontWeight: "bold", color: "black" }}
          >
            About
          </Button>
          <Button
          onClick={() =>router.push("home" )}
            color="inherit"
            variant="h4"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "3px" }}>{children}</Box>
    </Box>
  );
}
