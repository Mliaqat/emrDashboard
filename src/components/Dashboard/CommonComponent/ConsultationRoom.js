import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

function ConsultationRoom(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:90}}>
            <Typography>{props?.room}</Typography>
      </Box>
    </Paper>
  )
}

export default ConsultationRoom