import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Grid, Typography, Box } from "@mui/material"
import NavMenu from "./NavMenu"
import LoginModal from "./LoginModal"

export default function Header(props) {
  const [userInfo, setUserInfo] = useState([])
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
      <Grid
        container
        itemheight="120px"
        borderBottom="1px solid #9b9ba4"
        direction="column"
      >
        <Grid
          container
          item
          direction="row"
          columns={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            item
            direction="row"
            xs={4}
            justifyContent="flex-start"
          >
            <Grid item padding={0.5}>
              <Link to="/">Home</Link>
            </Grid>
            <Grid item padding={0.5}>
              {logged_in && <Link to="ItemNew">Create Item</Link>}
            </Grid>
          </Grid>

          <Grid container item direction="row" justifyContent="center" xs={4}>
            <Typography fontSize="20px"> Marketplace App</Typography>
          </Grid>

          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            xs={4}
          >
            <Grid item padding={0.5}>
              {!logged_in && <LoginModal />}
            </Grid>
            <Grid item padding={0.5}>
              {logged_in && (
                <Typography>Welcome {userInfo.username}!</Typography>
              )}
            </Grid>
            <Grid item padding={0.5}>
              {logged_in && <NavMenu />}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Vehicles </Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Sports & Outdoors</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Electronics & Music</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Home & Garden</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">
                Clothing, Shoes, & Accessories
              </Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Baby & Kids</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">
                {" "}
                Toys, Games & Hobbies
              </Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Collecti & Art</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Pet Supplies</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Health & Beauty</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">Wedding</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles">
              <Typography fontSize="15.5px">More</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  )
}
