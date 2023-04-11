import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";

function ProgressBar({ progress, title }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (progress <= 25) {
      setColor("#D32645");
    } else if (progress <= 50) {
      setColor("#F17E6E");
    } else if (progress <= 75) {
      setColor("#87CC85");
    } else {
      setColor("#87CC85");
    }
  });

  return (
    //JSX
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography
          sx={{ whiteSpace: "nowrap", color: "#003C83", fontSize: 12 }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: color, fontWeight: 600, fontSize: 12 }}>
          {progress}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: `#D9D9D9`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: `${color}`,
          },
        }}
      />
    </>
  );
}

export default ProgressBar;
