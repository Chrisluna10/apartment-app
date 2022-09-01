import { Link } from "react-router-dom"
import { Typography, Grid } from "@mui/material"
import React from "react"

const FooterContainer = {
  position: "relative",
  bottom: 0,
  minHeight: 40,
  maxHeight: 100,
  background: "#00a87e",
}

const textStyle = {
  color: "white",
  fontSize: "15px"
}

export default function Footer() {
  return (
    <Grid
      container
      style={FooterContainer}
      direction="row"
      justifyContent="space-between"
    >
      <Grid item>
        <Typography style={textStyle}>
          Github for this code: https://github.com/Chrisluna10/marketplace-app
        </Typography>
      </Grid>
      <Grid item>
        <Typography style={textStyle}>Created by: Chris Luna</Typography>
      </Grid>
      <Grid item>
        <Typography style={textStyle}>
          LinkedIn: https://www.linkedin.com/in/chris-luna-09a755219/
        </Typography>
      </Grid>
    </Grid>
  )
}
