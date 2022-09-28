import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Grid, Typography, Box } from "@mui/material"
import NavMenu from "./NavMenu"
import LoginModal from "./LoginModal"
import SearchBar from "./SearchBar"
import {localhost, heroku} from "../../fetch-urls"
import offerup from "../../assets/offerup.png"

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
    fetch(`${heroku}/current_user`, {
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
        paddingTop={1}
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
            <Grid item padding={1.5} paddingLeft={2.5}>
              <Link to="/" style={styles.linkStyle}>
                <img src={offerup} height={40} width={130}></img>
              </Link>
            </Grid>
            {/* <Grid item padding={1.5}>
              <SearchBar />
            </Grid> */}
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
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/vehicles" style={styles.linkStyle}>
              <Typography fontSize="14px">Vehicles </Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/sports&outdoors" style={styles.linkStyle}>
              <Typography fontSize="14px">Sports & Outdoors</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/electronics&media" style={styles.linkStyle}>
              <Typography fontSize="14px">Electronics & Media</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/home&garden" style={styles.linkStyle}>
              <Typography fontSize="14px">Home & Garden</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/clothing" style={styles.linkStyle}>
              <Typography fontSize="14px">
                Clothing, Shoes & Accessories
              </Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/baby&kids" style={styles.linkStyle}>
              <Typography fontSize="14px">Baby & Kids</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/toys" style={styles.linkStyle}>
              <Typography fontSize="14px"> Toys, Games & Hobbies</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/collectibles&art" style={styles.linkStyle}>
              <Typography fontSize="14px">Collectibles & Art</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/petsupplies" style={styles.linkStyle}>
              <Typography fontSize="14px">Pet Supplies</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/health&beauty" style={styles.linkStyle}>
              <Typography fontSize="14px">Health & Beauty</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/wedding" style={styles.linkStyle}>
              <Typography fontSize="14px">Wedding</Typography>
            </Link>
          </Grid>
          <Grid item padding={1} paddingTop={.5} paddingBottom={.5}>
            <Link to="/vehicles" style={styles.linkStyle}>
              <Typography fontSize="14px">More</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  )
}
