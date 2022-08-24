import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Grid, Typography } from "@mui/material"

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

  function signOut(e) {
    e.preventDefault()

    fetch("http://localhost:3000/users/sign_out", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "signed_out") {
          navigate("login")
        } else {
          alert("user not signed out")
        }
      })
  }

  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props
  return (
    <Grid container item >
      <nav>
        <Grid container item direction="row">
          <Grid item padding={3}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item padding={3}>
            <Link to="/itemindex">Items</Link>
          </Grid>
          <Grid item padding={3}>
            {logged_in && <Link to="profile">Profile</Link>}
          </Grid>
          <Grid item padding={3}>
            {logged_in && <Link to="ItemNew">Create Item</Link>}
          </Grid>
          <Grid item padding={3}>
            {!logged_in && <Link to="login">Login</Link>}
          </Grid>
          {/* <Grid item padding={3}>
      <Link to="registration">Registration</Link>
      </Grid> */}
          <Grid item padding={3}>
            {logged_in && <Button onClick={signOut}>Logout</Button>}
          </Grid>
          <Grid item padding={3}>
            {logged_in && <Typography>Welcome {userInfo.email}!</Typography>}
          </Grid>
        </Grid>
      </nav>
    </Grid>
  )
}
