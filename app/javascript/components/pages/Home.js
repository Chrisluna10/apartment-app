import { Typography, Grid } from "@mui/material"
import React from "react"
import ItemIndex from "./ItemIndex"

export default function Home(props) {
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props
  return (
    <Grid container item>
      <ItemIndex />
    </Grid>
  )
}
