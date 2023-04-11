import { Grid, Typography } from "@mui/material";
import React from "react";

function PatientMovementTracker(props) {
  const { patientMovement } = props;
  return (
    <>
      {patientMovement && (
        <>
          <Grid item xs={12}>
            <Typography>PatientMovementTracker</Typography>
          </Grid>
        </>
      )}
    </>
  );
}

export default PatientMovementTracker;
