import {
  Box,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

function SecondaryCards({ title, children, subTitle, radiobtn }) {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        marginBottom: 2,
        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box
        sx={{
          background: "#B2D1FF",
          "& :hover": {
            background: "#7db2ff",
          },
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: 600, color: "#080808" }}
          py={1}
          px={2}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ mx: 1, mt: 1 }}>
        {radiobtn ? (
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="to"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="From" control={<Radio />} label="From" />
              <FormControlLabel value="to" control={<Radio />} label="To" />
            </RadioGroup>
          </FormControl>
        ) : (
          <Typography>{subTitle}</Typography>
        )}

        <Divider />
        {children}
      </Box>
    </Card>
  );
}

export default SecondaryCards;
