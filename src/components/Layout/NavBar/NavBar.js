import {
  Badge,
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          boxShadow: "2px 0px 13px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography sx={{ fontWeight: 600, letterSpacing: 1 }}>EMR</Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "8%" }}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    src="images/search.svg"
                    width={15}
                    height={15}
                    alt="search"
                  />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Image src="images/logo2.svg" width={20} height={20} alt="navIcon" />
          <Badge color="error" badgeContent=" " variant="dot">
            <Image
              src="images/navbell.svg"
              width={20}
              height={20}
              alt="navIcon"
            />
          </Badge>
          <Image
            src="images/profile.svg"
            width={25}
            height={25}
            alt="navIcon"
          />
        </Box>
      </Box>
    </Paper>
  );
}

export default NavBar;
