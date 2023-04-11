import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styless from "./PatientMovementTracker.module.scss";
import { Pat, TickIcon } from "../../../../public/Icon/icon";

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

const PatienArray = [
  {
    patientName: "Leslie Alexander",
    label: "Patient Details",
    patientdatials: [
      { PreAssesment: true, label: "Pre-Assesment" },
      { Waitingarea: true, label: "Waiting Area" },
      { ConsultationRoom: true, label: "Consultation Room" },
      { ConsultationRoom: true, label: "Patient Details" },
      { ConsultationRoom: true, label: "Patient Details" },
      { ConsultationRoom: true, label: "Patient Details" },
      { ConsultationRoom: true, label: "Patient Details" },
      { ConsultationRoom: true, label: "Patient Details" },
      { ConsultationRoom: true, label: "Patient Details" },
    ],
  },
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

          {PatienArray.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Grid
                  xs={6}
                  sm={0}
                  sx={{
                    display: { xs: "block", lg: "none" },
                    mt: { xs: 2, lg: 0 },
                  }}
                >
                  <Typography className={styless.titlebg} sx={{ height: 100 }}>
                    {data.label}
                  </Typography>
                </Grid>

                <Grid item xs={6} lg={2} sx={{ mt: { xs: 2, lg: 0 } }}>
                  <Box
                    p={2}
                    sx={{
                      border: "0.5px solid #BDE6D5",
                      height: 100,
                    }}
                  >
                    <Typography sx={styles.mainTitle}>
                      Leslie Alexander
                    </Typography>
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
                </Grid>

                {
                  data.patientdatials.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Grid
                          xs={6}
                          md={2}
                          sx={{ display: { xs: "block", lg: "none" } }}
                        >
                          <Typography
                            className={styless.titlebg}
                            sx={{ height: 100 }}
                          >
                            {data.label}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={2} lg={1.11}>
                          <Box className={styless.greenbg} sx={{ height: 100 }}>
                            <Pat color="#f61313" />
                          </Box>
                        </Grid>
                      </React.Fragment>
                    );
                  })

                  // <Box className={styless.redbg}>
                  //   <Pat color="#f1ae00" />
                  // </Box>
                  // <Box className={styless.lightYellowbg}>
                  //   <TickIcon />
                  // </Box>
                }
              </React.Fragment>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default PatientMovementTracker;

// -------------------------Styles---------------------------------

const styles = {
  mainContainer: {
    width: { xs: "60vw", sm: "70vw", md: "100%", lg: "100%" },
    overflow: "auto",
    overflowX: "scroll",
  },
  mainHeading: {
    p: 1.5,
    color: "#191F4F",
    fontWeight: 800,
    fontSize: { xs: 12, md: 22 },
    backgroundColor: "rgba(161, 210, 255, 0.4)",
    textAlign: "center",
  },
  subHeading: {
    overflow: "hidden",
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
};
