import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function MainHeading(props) {
  return (
    <Grid item xs={12} >
      <Box
        sx={{
          background: "#3B448A",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#021072",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}
          >
            {props.title}
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              transform: props.menue ? "rotate(180deg)" : "rotate(0deg)",
            }}
            onClick={() => props.setMenue(!props.menue)}
          >
            <Image
              src="images/arrow.svg"
              width={20}
              height={20}
              alt="arrowIcon"
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default MainHeading;
