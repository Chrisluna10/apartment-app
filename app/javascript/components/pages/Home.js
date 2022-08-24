import { Typography, Grid } from '@mui/material'
import React, { useEffect } from 'react'
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

    useEffect(() => {
    }, [])

    return (
  
       <Grid container item >
        <Typography>Marketplace App</Typography>
       <ItemIndex />
     </Grid>
    )
  }

