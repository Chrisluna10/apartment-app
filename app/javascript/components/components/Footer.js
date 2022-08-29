import { Link } from "react-router-dom"
import { Typography, Grid } from "@mui/material"
import React from "react"

export default function Footer() {
  return (
    <Grid
      container
      borderTop="1px solid #9b9ba4"
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        right: 0,
        height: "40px"
      }}
    >
      <Typography>Footer</Typography>
    </Grid>
  )
}
