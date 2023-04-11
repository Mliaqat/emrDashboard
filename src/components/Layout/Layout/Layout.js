import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { Box} from "@mui/material";

function Layout({ children }) {
  return (
    <Box sx={{display:"flex", height: "100vh" }}>
      <Box>
        <SideBar/>
      </Box>
      <Box sx={{flex:1}}>
        <NavBar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
