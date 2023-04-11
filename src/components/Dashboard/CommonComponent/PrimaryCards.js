import { Box, Card, Typography } from "@mui/material";
import React from "react";

function PrimaryCards({ title, children }) {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        minHeight: 150,
        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box
        sx={{
          background: "#3B448A",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#021072",
          },
        }}
      >
        <Typography
          sx={{ fontSize: 16, fontWeight: 600, letterSpacing: 1 }}
          py={1}
          px={2}
        >
          {title}
        </Typography>
      </Box>
      <Box p={1}>{children}</Box>
    </Card>
  );
}

export default PrimaryCards;
