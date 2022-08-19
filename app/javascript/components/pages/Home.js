import { Typography, Grid } from '@mui/material'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
  
       <Grid container item border="2px solid red">
        <Typography>Marketplace App</Typography>
       {/* <ItemIndex /> */}
     </Grid>
    )
  }

