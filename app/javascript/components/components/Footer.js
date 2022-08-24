import { Link } from "react-router-dom"
import { Typography, Grid } from "@mui/material"
import React from "react"

export default function Footer() {
  return (
  <Grid
    container
    item
    position="absolute"
    sx={{
      left: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <Typography>Footer</Typography>
  </Grid>
  )
}