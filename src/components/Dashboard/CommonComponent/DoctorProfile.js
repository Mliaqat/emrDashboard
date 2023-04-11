import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function DoctorProfile({ allIcon }) {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        "&:hover": {
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Grid
        container
        my={1}
        p={1}
        sx={{
          alignItems: "center",
          "&.docProfile": {
            "&::before": {
              content: '""',
              position: "absolute",
              display: "block",
              height: "80%",
              width: 6,
              background: "#009456",
              left: 0,
              borderRadius: "0px 30px 30px 0px",
            },
          },
        }}
        className="docProfile"
      >
        <Grid Item xs={4} pl={1}>
          <Typography sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}>
            Leslie Alexander
          </Typography>
          <Typography sx={{ fontSize: 10, color: "#4F4F4F", fontWeight: 600 }}>
            MRN: AB12345
          </Typography>
          <Typography sx={{ fontSize: 10, color: "#4F4F4F", fontWeight: 600 }}>
            <Image src="images/age.svg" width={10} height={10} alt="age" /> 34Y
          </Typography>
        </Grid>
        <Grid Item xs={4}>
          <Typography sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}>
            Dr. Bessie Cooper
          </Typography>
          <Typography sx={{ fontSize: 10, color: "#4F4F4F", fontWeight: 600 }}>
            Genreal Physician
          </Typography>
          <Typography sx={{ fontSize: 10, color: "#4F4F4F", fontWeight: 600 }}>
            Bellevue Clinic
          </Typography>
        </Grid>
        <Grid Item xs={4} sx={{ textAlign: "center" }}>
          {allIcon ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10%",
                "& :hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Image src="images/sahr.svg" width={15} height={15} alt="share" />
              <Image src="images/edit.svg" width={15} height={15} alt="share" />
              <Image
                src="images/cross.svg"
                width={15}
                height={15}
                alt="share"
              />
            </Box>
          ) : (
            <Box
              sx={{
                "& :hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Image src="images/view.svg" width={15} height={15} alt="share" />
            </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DoctorProfile;
