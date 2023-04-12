import { Grid } from "@mui/material";
import React from "react";
import Layout from "../Layout/Layout/Layout";
import { useState } from "react";
import PatientDetails from "./PatientDetails/PatientDetails";
import MainHeading from "./CommonComponent/MainHeading";
import PatientMovementTracker from "./PatientMovementTracker/PatientMovementTracker";
import HeaderCards from "./HeaderCards/HeaderCards";

function Dashboard() {
  const [menue, setMenue] = useState(true);
  const [patientMovement, setpatientMovement] = useState(true);
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        mt={1}
        px={2}
        sx={{ justifyContent: { xs: "center", md: "" } }}
      >
        {/* ------------------------Header Dashboard Cards--------------------------------------- */}

        <HeaderCards />

        {/* -----------------------------------PatientDetails-------------------------------------------- */}

        <MainHeading
          title="Patient Details"
          menue={menue}
          setMenue={setMenue}
        />
        <PatientDetails menue={menue} />

        {/* ---------------------------------------Patient Movement Tracker------------------------------------ */}

        <MainHeading
          title="Patient Movement Tracker"
          menue={patientMovement}
          setMenue={setpatientMovement}
        />
        <PatientMovementTracker patientMovement={patientMovement} />
      </Grid>
    </Layout>
  );
}

export default Dashboard;
