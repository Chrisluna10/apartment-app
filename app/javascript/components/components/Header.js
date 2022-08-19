import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Grid } from "@mui/material"


class Header extends React.Component{ 
  render(){ 
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route,
      } = this.props
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
      <Link to="Profile">Profile Screen</Link>
      </Grid>
      <Grid item padding={3}>
      { logged_in && <Link to="ItemNew">Create Item</Link>}
      </Grid>
      <Grid item padding={3}>
      { !logged_in && <Link to={sign_in_route}>Login</Link>}
      </Grid>
      <Grid item padding={3}>
      <Link to="registration">Registration</Link>
      </Grid>
      <Grid item padding={3}>
      { logged_in && <Link to={sign_out_route}>
      Logout
      </Link>}
      </Grid>
      </Grid>
    </nav>
  </Grid>
       
      //   <div className="topnav">
      //   <a className="active" href="/">Home</a>
      //   <a href="/itemindex">Apartments</a>
      //   <a href="#contact">Contact</a>
      //   { logged_in && <NavLink to="/itemnew">Add Item</NavLink> }
      //  { logged_in && <NavLink to="/apartmentsnew">Add Apartment</NavLink> }
      //   { logged_in  &&
      //       <div>
      //         <a href={sign_out_route }>Sign Out</a>
      //       </div>
      //     }
      //     { !logged_in &&
      //       <div>
      //         <a href={ sign_in_route }>Sign In</a>
      //       </div>
      //     }
      // </div>
      )
    }
  }

export default Header; 