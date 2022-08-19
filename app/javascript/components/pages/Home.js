import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ItemIndex from "./ItemIndex"

export default function Home() {
    return (
      // <div className="page-body">
      //   <h3>Marketplace App</h3>
      //   {logged_in && <h3>{user.email}</h3>}

        
      // </div>
       <Grid container item border="2px solid red">
        <Typography>Marketplace App</Typography>
       <ItemIndex />
       {/* <Typography>user: {info.user}</Typography> */}
     </Grid>
    )
  }

