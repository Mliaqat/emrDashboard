import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styless from "./PatientMovementTracker.module.scss";
import { Pat, TickIcon } from "../../../../public/Icon/icon";

const titleArray = [
  { title: "Patient details" },
  { title: "Pre-Assesment", borderLine: "greenBorder" },
  { title: "Waiting area", borderLine: "greenBorder" },
  { title: "Consultation Room ", borderLine: "greenBorder" },
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
    men: "AB12345",
    patientdatials: true,
    PreAssesment: true,
    Waitingarea: true,
    ConsultationRoom: true,
    BillingCounter: true,
    ServiceOne: true,
    Servicetwo: true,
    Servicethree: true,
    Followupbay: true,
    Prescription: true,
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

          <Grid item xs={12}>
            <Box sx={styles.mainContainer}>
              <div className={styless.gridlayout}>
                {titleArray.map((data, index) => {
                  const containerClasses = `${styless.titlebg} ${
                    styless[data?.borderLine]
                  }`;
                  return (
                    <Typography key={index} className={containerClasses}>
                      {data.title}
                    </Typography>
                  );
                })}
              </div>
              <div className={styless.subgridlayout}>
                {PatienArray.map((data, index) => {
                  return (
                    <>
                      <Box p={2} sx={{ border: "0.5px solid #BDE6D5" }}>
                        <Typography sx={styles.mainTitle}>
                          Leslie Alexander
                        </Typography>
                        <Typography sx={styles.subTitle}>
                          MRN: AB12345
                        </Typography>
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
                      <Box className={styless.greenbg}>
                        <Pat color="#f61313" />
                      </Box>
                      <Box className={styless.redbg}>
                        <Pat color="#f1ae00" />
                      </Box>
                      <Box className={styless.lightYellowbg}>
                        <TickIcon />
                      </Box>
                    </>
                  );
                })}
                <Box p={2} sx={{ border: "0.5px solid #BDE6D5" }}>
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
                <Box className={styless.greenbg}>
                  <Pat color="#f61313" />
                </Box>
                <Box className={styless.redbg}>
                  <Pat color="#f1ae00" />
                </Box>
                <Box className={styless.lightYellowbg}>
                  <TickIcon />
                </Box>
                <Box>text</Box>
                <Box>text</Box>
                <Box>text</Box>
                <Box>text</Box>
                <Box>text</Box>
                <Box>text</Box>
                <Box>text</Box>
                <Box>text</Box>
              </div>
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
    width: { xs: "60vw", sm: "70vw", md: "80vw", lg: "100%" },
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
  mainTitle: { fontSize: 18, color: "#003C83", fontWeight: 600 },
  subTitle: { fontSize: 16, color: "#4F4F4F", fontWeight: 600 },
};
