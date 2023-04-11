import { Box, Paper, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function ProfileCard({ title, status }) {
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
      <Box
        sx={{
          display: "flex",
          p: 1,
          gap: 1,
          alignItems: "center",
          "&.profile": {
            "&::before": {
              content: '""',
              position: "absolute",
              display: "block",
              height: "80%",
              width: 6,
              background: "#009456",
              left: 0,
              borderRadius: "0px 30px 30px 0px",
            },
          },
        }}
        className="profile"
      >
        <Box>
          <Image src="images/profile.svg" width={50} height={50} alt="prfile" />
        </Box>

        {/* ------------------Profile Content--------------- */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "#191F4F" }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                "& :hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Tooltip title="Click Here For View Profile">
                <Image
                  src="images/dropdown2.svg"
                  width={10}
                  height={10}
                  alt="prfile"
                />
              </Tooltip>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    color: "#080808",
                    backgroundColor: "#BDBDBD",
                    fontSize: 12,
                    fontWeight: 600,
                    width: 30,
                    textAlign: "center",
                    mr: 1,
                  }}
                >
                  NOV
                </Typography>
                <Typography sx={{ fontSize: 10 }}>{status}</Typography>
              </Box>
              <Typography sx={{ fontSize: 10, whiteSpace: "nowrap" }}>
                2:OO PM
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mt: 1, gap: 4 }}>
              <Box sx={{ display: "flex " }}>
                <Typography
                  sx={{
                    color: "#080808",
                    backgroundColor: "#BDBDBD",
                    fontSize: 12,
                    fontWeight: 600,
                    width: 30,
                    textAlign: "center",
                    mr: 1,
                  }}
                >
                  CC
                </Typography>
                <Typography sx={{ fontSize: 10 }}>Procedure</Typography>
              </Box>
              <Box
                sx={{
                  "& :hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Image
                  src="images/bell.svg"
                  width={15}
                  height={15}
                  alt="prfile"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProfileCard;
