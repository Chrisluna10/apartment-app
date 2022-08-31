import { Link } from "react-router-dom"
import { Typography, Grid } from "@mui/material"
import React from "react"

const FooterContainer = {
  position: "relative",
  bottom: 0,
  minHeight: 40,
  maxHeight: 100,
  background: "#00a87e"
}

export default function Footer() {
  return (
    <Grid style={FooterContainer}
    >
      <Typography color="white">Footer</Typography>
    </Grid>
  )
}
