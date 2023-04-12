import React from "react";
import styless from "../PatientMovementTracker/PatientMovementTracker.module.scss";
import { PatienArray } from "../../../../dummydata";
import { Box, Grid, Typography } from "@mui/material";
import { Pat, TickIcon } from "../../../../public/Icon/icon";
import Image from "next/image";

function PatientMovement() {
  return (
    <>
      {PatienArray.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <Grid xs={6} sm={0} sx={{ ...styles.label, mt: { xs: 2, lg: 0 } }}>
              <Typography className={styless.titlebg} sx={{ height: 100 }}>
                {data.label}
              </Typography>
            </Grid>

            <Grid item xs={6} lg={2} sx={{ mt: { xs: 2, lg: 0 } }}>
              <Box
                p={2}
                sx={{ ...styles.onHover, border: "0.5px solid #BDE6D5" }}
              >
                <Typography sx={styles.mainTitle}>
                  {data?.patientName}
                </Typography>
                <Typography sx={styles.subTitle}>MRN: AB12345</Typography>
                <Typography sx={styles.subTitle}>
                  <Image
                    src="images/age.svg"
                    width={10}
                    height={10}
                    alt="age"
                  />{" "}
                  {data?.age}Y
                </Typography>
              </Box>
            </Grid>

            {data.patientdatials.map((data, index) => {
              const { color = "#f61313" } = data;
              return (
                <React.Fragment key={index}>
                  <Grid xs={6} md={2} sx={styles.label}>
                    <Typography className={styless.titlebg} sx={styles.onHover}>
                      {data.label}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={2} lg={1.11}>
                    <Box className={styless[data.bgcolor]} sx={styles.onHover}>
                      {data.icon === "tick" ? (
                        <TickIcon />
                      ) : (
                        <Pat color={color} />
                      )}
                    </Box>
                  </Grid>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default PatientMovement;

const styles = {
  mainTitle: { fontSize: 18, color: "#003C83", fontWeight: 600 },
  subTitle: { fontSize: 16, color: "#4F4F4F", fontWeight: 600 },
  label: {
    display: { xs: "block", lg: "none" },
    border: "0.5px solid #bde6d5",
  },
  onHover: {
    height: 100,
    "&:hover": { boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" },
  },
};
