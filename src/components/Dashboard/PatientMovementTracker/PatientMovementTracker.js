import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function PatientMovementTracker(props) {
  const { patientMovement } = props;
  return (
    <>
      {patientMovement && (
        <Grid
          container
          px={2}
          mt={2}
          paddingRight={0}
          justifyContent={"center"}
        >
          <Grid item xs={4} sx={styles.mainHeading}>
            Consultation
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              ...styles.mainHeading,
              borderRight: "5px solid #ffff",
              borderLeft: "5px solid #ffff",
            }}
          >
            Diagnostics
          </Grid>
          <Grid item xs={4} sx={styles.mainHeading}>
            Post Consultation
          </Grid>

          <Grid item xs={12} mt={2}>
            <Box sx={styles.mainContainer}>
              <Box minWidth={100} p={1}>
                <Typography sx={styles.mainTitle}>Leslie Alexander</Typography>
                <Typography sx={styles.subTitle}>MRN: AB12345</Typography>
                <Typography sx={styles.subTitle}>
                  <Image
                    src="images/age.svg"
                    width={10}
                    height={10}
                    alt="age"
                  />{" "}
                  34Y
                </Typography>
              </Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
              <Box minWidth={100}>text</Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default PatientMovementTracker;

// -------------------------Styles---------------------------------

const styles = {
  mainContainer: {
    width: { xs: "60vw", sm: "70vw", md: "80vw" },
    overflow: "auto",
    display: "flex",
    justifyContent: "space-between",
    overflowX: "scroll",
  },
  mainHeading: {
    p: 1.5,
    color: "#191F4F",
    fontWeight: 800,
    fontSize: { xs: 12, md: 22 },
    backgroundColor: "rgba(161, 210, 255, 0.4);",
  },
  mainTitle: { fontSize: 14, color: "#003C83", fontWeight: 600 },
  subTitle: { fontSize: 12, color: "#4F4F4F", fontWeight: 600 },
};
