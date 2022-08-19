import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Grid } from "@mui/material"


export default function Header(props) { 
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route,
      } = props
      return (

        <Grid container item border="2px solid red">
    <nav>
      <Grid container item direction='row'>
      <Grid item padding={3}>
      <Link to="/">Home</Link>
      </Grid>
      <Grid item padding={3}>
      <Link to="/itemindex">Items</Link>
      </Grid>
      <Grid item padding={3}>
      { logged_in && <Link to="profile">Profile</Link>}
      </Grid>
      <Grid item padding={3}>
      { logged_in && <Link to="ItemNew">Create Item</Link>}
      </Grid>
      <Grid item padding={3}>
      { !logged_in && <Link to={sign_in_route}>Login</Link>}
      </Grid>
      {/* <Grid item padding={3}>
      <Link to="registration">Registration</Link>
      </Grid> */}
      <Grid item padding={3}>
      { logged_in && <Link to={sign_out_route}>
      Logout
      </Link>}
      </Grid>
      </Grid>
    </nav>
  </Grid>
      )
    }