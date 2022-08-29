import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Grid, Typography, Box } from "@mui/material"
import NavMenu from "./NavMenu"
import LoginModal from "./LoginModal"
import SearchBar from "./SearchBar"

const styles = {
  linkStyle: {
    textDecoration: "none",
    color: "#121212",
  },
}

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
            xs={6}
            justifyContent="flex-start"
          >
            <Grid item padding={0.5}>
              <Link to="/" style={styles.linkStyle}>
                <Typography fontSize="20px">Marketplace App</Typography>
              </Link>
            </Grid>
            <Grid item padding={0.5}>
              <SearchBar />
            </Grid>
          </Grid>

          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            xs={6}
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
          paddingBottom={1}
          paddingTop={1}
        >
          <Grid item padding={0.5}>
            <Link to="/vehicles" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Vehicles </Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/sports&outdoors" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Sports & Outdoors</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/electronics&media" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Electronics & Media</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/home&garden" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Home & Garden</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/clothing" style={styles.linkStyle}>
              <Typography fontSize="15.5px">
                Clothing, Shoes, & Accessories
              </Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/baby&kids" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Baby & Kids</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/toys" style={styles.linkStyle}>
              <Typography fontSize="15.5px"> Toys, Games & Hobbies</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/collectibles&art" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Collectibles & Art</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/petsupplies" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Pet Supplies</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/health&beauty" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Health & Beauty</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/wedding" style={styles.linkStyle}>
              <Typography fontSize="15.5px">Wedding</Typography>
            </Link>
          </Grid>
          <Grid item padding={0.5}>
            <Link to="/vehicles" style={styles.linkStyle}>
              <Typography fontSize="15.5px">More</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  )
}
