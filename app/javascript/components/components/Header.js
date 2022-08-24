import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Grid, Typography, Box } from "@mui/material"
import NavMenu from "./NavMenu"
import LoginModal from "./LoginModal"

export default function Header(props) {
  const [userInfo, setUserInfo] = useState({})
  const navigate = useNavigate()

  function userFetch() {
    fetch("http://localhost:3000/current_user", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setUserInfo(res.user))
  }
  // console.log("info", userInfo)

  useEffect(() => {
    userFetch()
  }, [])

  

  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props
  return (
    <nav>
      <Grid container borderBottom="1px solid #9b9ba4">
      <Grid container item direction="row" columns={12}>
        <Grid container item direction="row" xs={4} justifyContent="flex-start">
          <Grid item padding={.5}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item padding={.5}>
            {logged_in && <Link to="ItemNew">Create Item</Link>}
          </Grid>
        </Grid>

        <Grid container item direction="row" justifyContent="center" xs={4}>
          <Typography> Marketplace App</Typography>
        </Grid>

        <Grid container item direction="row" justifyContent="flex-end" xs={4}>
          <Grid item padding={.5}>
            {!logged_in && <LoginModal />}
          </Grid>
          <Grid item padding={.5}>
            {logged_in && <NavMenu />}
          </Grid>
          <Grid item padding={.5}>
            {logged_in && <Typography>Welcome {userInfo.email}!</Typography>}
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </nav>
  )
}
