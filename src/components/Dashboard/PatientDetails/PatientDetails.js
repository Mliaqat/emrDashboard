import React from "react";
import DoctorProfile from "../CommonComponent/DoctorProfile";
import { Box, Grid, Typography } from "@mui/material";
import SecondaryCards from "../CommonComponent/SecondaryCards";
import { ProfileData } from "../../../../dummydata";
import ProfileCard from "../CommonComponent/ProfileCard";

function PatientDetails(props) {
  const { menue } = props;

  return (
    <>
      {menue && (
        <>
          <Grid item xs={12} sm={6} md={4} lg={2.5}>
            <SecondaryCards title="Pending" subTitle="Upcoming (2)">
              {ProfileData.map((data, index) => {
                return (
                  <Box my={2} key={index}>
                    <ProfileCard title={data?.title} status={data?.status} />
                  </Box>
                );
              })}
            </SecondaryCards>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.5}>
            <SecondaryCards title="In Progress" subTitle="ConsultationRoom 1">
              {ProfileData.map((data, index) => {
                return (
                  <Box my={2} key={index}>
                    <ProfileCard title={data?.title} status={data?.status} />
                  </Box>
                );
              })}
            </SecondaryCards>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.5}>
            <SecondaryCards title="Completed" subTitle="Checked Out (1)">
              {ProfileData.map((data, index) => {
                return (
                  <Box my={2} key={index}>
                    <ProfileCard title={data?.title} status={data?.status} />
                  </Box>
                );
              })}
            </SecondaryCards>
          </Grid>
          <Grid item xs={12} lg={4.5}>
            <SecondaryCards
              title="Cross Consultation Request"
              subTitle="jdffd"
              radiobtn={true}
            >
              <Grid container sx={{ textAlign: "center" }} my={1}>
                <Grid Item xs={4}>
                  <Typography
                    sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}
                  >
                    Patient details
                  </Typography>
                </Grid>
                <Grid Item xs={4}>
                  <Typography
                    sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}
                  >
                    Consultant details
                  </Typography>
                </Grid>
                <Grid Item xs={4}>
                  <Typography
                    sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}
                  >
                    Action
                  </Typography>
                </Grid>
              </Grid>
              <DoctorProfile />
              <DoctorProfile allIcon={true} />
            </SecondaryCards>
            <SecondaryCards
              title="Referal  Request"
              subTitle="jdffd"
              radiobtn={true}
            >
              <Grid container sx={{ textAlign: "center" }} my={1}>
                <Grid Item xs={4}>
                  <Typography
                    sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}
                  >
                    Patient details
                  </Typography>
                </Grid>
                <Grid Item xs={4}>
                  <Typography
                    sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}
                  >
                    Consultant details
                  </Typography>
                </Grid>
                <Grid Item xs={4}>
                  <Typography
                    sx={{ fontSize: 12, color: "#003C83", fontWeight: 600 }}
                  >
                    Action
                  </Typography>
                </Grid>
              </Grid>
              <DoctorProfile />
              <DoctorProfile allIcon={true} />
            </SecondaryCards>
          </Grid>
        </>
      )}
    </>
  );
}

export default PatientDetails;
