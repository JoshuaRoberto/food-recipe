import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

export default function HomeLay() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "" }}>
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
            Pinoy Cuisine Recipe
          </Typography>
          <Button
            color="inherit"
            variant="h4"
            sx={{ marginRight: "15px", fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            variant="h4"
            sx={{ marginRight: "15px", fontWeight: "bold" }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            variant="h4"
            sx={{ marginRight: "15px", fontWeight: "bold" }}
          >
            About
          </Button>
          <Button color="inherit" variant="h4" sx={{ fontWeight: "bold" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
