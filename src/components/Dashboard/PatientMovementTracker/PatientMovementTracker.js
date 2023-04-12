import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styless from "./PatientMovementTracker.module.scss";
import SearchField from "@/Ui/SearchField/SearchField";
import PatientMovement from "../CommonComponent/PatientMovement";

const titleArray = [
  { title: "Pre-Assesment", borderLine: "greenBorder" },
  { title: "Waiting Area", borderLine: "greenBorder" },
  { title: "Consultation Room", borderLine: "greenBorder" },
  { title: "Billing Counter", borderLine: "yellowBorder" },
  { title: "Service Area-1", borderLine: "redBorder" },
  { title: "Service Area-2", borderLine: "yellowBorder" },
  { title: "Service Area-3", borderLine: "redBorder" },
  { title: "Followup bay", borderLine: "redBorder" },
  { title: "Prescription", borderLine: "redBorder" },
];

function PatientMovementTracker(props) {
  const { patientMovement } = props;
  return (
    <>
      {patientMovement && (
        <Grid
          container
          px={2}
          my={2}
          paddingRight={0}
          justifyContent={"center"}
        >
          {/* -----------------------Filter---------------------------------- */}

          <Grid item xs={12} mb={2}>
            <Paper elevation={3}>
              <Box sx={styles.filter}>
                <SearchField />

                <Image
                  src="images/search.svg"
                  width={15}
                  height={15}
                  alt="search"
                />
              </Box>
            </Paper>
          </Grid>

          {/* ---------------------Primary-Header-------------------------- */}

          <Grid item xs={4} sx={styles.mainHeading}>
            Consultation
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              ...styles.mainHeading,
              borderRight: "3px solid #ffff",
              borderLeft: "3px solid #ffff",
            }}
          >
            Diagnostics
          </Grid>
          <Grid item xs={4} sx={styles.mainHeading}>
            Post Consultation
          </Grid>

          {/* -------------------------Secondary-Header----------------------------- */}

          <Grid item xs={2} sx={{ display: { xs: "none", lg: "block" } }}>
            <Box className={styless.titlebg}>
              <Typography sx={styles.subHeading}>Patient Details</Typography>
            </Box>
          </Grid>
          {titleArray.map((data, index) => {
            const containerClasses = `${styless.titlebg} ${
              styless[data?.borderLine]
            }`;
            return (
              <Grid
                item
                key={index}
                xs={1.11}
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                <Box className={containerClasses}>
                  <Typography sx={styles.subHeading}>{data.title}</Typography>
                </Box>
              </Grid>
            );
          })}

          {/* ---------------------------------Patient Card------------------------------------- */}

          <PatientMovement />
        </Grid>
      )}
    </>
  );
}

export default PatientMovementTracker;

// -------------------------Styles---------------------------------

const styles = {
  filter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 2,
    py: 1,
  },
  mainContainer: {
    width: { xs: "60vw", sm: "70vw", md: "100%", lg: "100%" },
    overflow: "auto",
    overflowX: "scroll",
  },
  mainHeading: {
    p: 1.5,
    color: "#003C83",
    fontWeight: 800,
    fontSize: { xs: 12, md: 22 },
    backgroundColor: "rgba(161, 210, 255, 0.4)",
    textAlign: "center",
  },
  subHeading: {
    overflow: { xs: "hidden", xl: "visible" },
    textOverflow: "ellipsis",
    fontSize: 14,
    color: "#003C83",
    fontWeight: 600,
    p: 3,
    "&:hover": {
      overflow: "visible",
    },
  },
  mainTitle: { fontSize: 18, color: "#003C83", fontWeight: 600 },
  subTitle: { fontSize: 16, color: "#4F4F4F", fontWeight: 600 },
  label: {
    display: { xs: "block", lg: "none" },
    border: "0.5px solid #bde6d5",
  },
};
