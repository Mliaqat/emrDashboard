import { Box, Grid } from '@mui/material';
import React from 'react'
import PrimaryCards from '../CommonComponent/PrimaryCards';
import Image from 'next/image';
import ProgressBar from '../CommonComponent/ProgressBar';
import { ClinicalBenchmarking, dailyInformation } from '../../../../dummydata';

function HeaderCards() {
  return (
    <>
     <Grid item xs={12} md={4}>
          <PrimaryCards title="Daily Information">
            <Grid container spacing={2} mt={0}>
              {dailyInformation?.map((data, index) => {
                return (
                  <Grid
                    item
                    {...data?.gridSize}
                    sx={{ order: { xs: `${data?.order}`, sm: "" } }}
                    key={index}
                  >
                    <Box key={index}>
                      {data?.img ? (
                        <Box sx={{ textAlign: "center" }}>
                          <Image
                            src={data?.img}
                            width={15}
                            height={15}
                            alt="test"
                          />
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "fex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>{data?.title}</Box>
                          <Box>{data?.count}</Box>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </PrimaryCards>
        </Grid>
        <Grid item xs={12} md={8}>
          <PrimaryCards title="Clinical Benchmarking">
            <Grid container>
              {ClinicalBenchmarking.map((data, index) => {
                return (
                  <Grid item {...data?.gridSize} key={index}>
                    <Box sx={{ p: 2 }} key={index}>
                      <ProgressBar
                        progress={data.count}
                        title={data.title}
                        gridSize={data?.gridSize}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </PrimaryCards>
        </Grid>
    </>
  )
}

export default HeaderCards