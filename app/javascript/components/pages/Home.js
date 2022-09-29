import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate, useParams } from "react-router"
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Button,
} from "@mui/material"
import ButtonUnstyled, { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { styled } from "@mui/system"
import Sorting from "../components/Sorting"
import indexHook from "../customHooks/indexHook"
import offerUpLogo from "../../assets/offerup-logo.png"

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #00a87e;
  border-radius: 18px;
  height: 40px;
  width: 110px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #00a87e;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #00a87e;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const styles = {
  cardAction: {
    "&:hover": {
      opacity: 0,
      background: "white",
    },
  },
  cardStyle: {
    display: "block",
    height: 250,
    maxWidth: 175,
    border: "none",
    boxShadow: "none",
  },
  gridContainer: {
    paddingLeft: "15px",
    paddingRight: "5px",
  },
  typography: {
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
  },
}

export default function Home(props) {
  const navigate = useNavigate()
  const [items, setItems] = indexHook()
  const [name, setName] = useState("Recent First(Default)")

  useEffect(() => {
    setItems(props.items)
  }, [props.items])

  function initialState() {
    setItems(props.items)
    setName("Recent First(Default)")
  }

  function handlePriceAscending() {
    const priceAscending = [...items].sort((a, b) => {
      return a.price > b.price ? 1 : -1
    })
    setItems(priceAscending)
    setName("Price: Low to High")
  }

  function handlePriceDescending() {
    const priceDescending = [...items].sort((a, b) => {
      return a.price < b.price ? 1 : -1
    })
    setItems(priceDescending)
    setName("Price: High to Low ")
  }

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }

  return (
    <Grid container columns={14} style={styles.gridContainer}>
      <Grid
        container
        item
        justifyContent="center"
        alignContent="center"
        height="100px"
      >
        <Grid item paddingRight={2} paddingTop={0.5}>
          <img src={offerUpLogo} height="25px" width="25px" paddingRight={2} />
        </Grid>
        <Grid item paddingTop={0.5}>
          <Typography style={styles.typography} fontSize="20px" color="#00a87e">
            The Simpler way to buy and sell locally!
          </Typography>
        </Grid>
        <Grid item paddingLeft={2} paddingBottom={6} height="60px">
          <CustomButton>
            <Typography style={styles.typography} fontSize="15px">
              {" "}
              Get the app
            </Typography>
          </CustomButton>
        </Grid>
      </Grid>
      <Grid container item justifyContent="flex-end" paddingRight={2}>
        <Sorting
          initialState={initialState}
          handlePriceAscending={handlePriceAscending}
          handlePriceDescending={handlePriceDescending}
          name={name}
        />
      </Grid>
      {items.map((item) => {
        return (
          <Grid item xs={7} sm={3.5} md={2} padding={0.8} key={item.id}>
            <Card style={styles.cardStyle}>
              <CardActionArea
                onClick={() => handleClick(item)}
                style={styles.cardAction}
              >
                <img
                  src={item.image_url}
                  style={{
                    height: 150,
                    width: 180,
                  }}
                />
                <CardContent>
                  <Grid
                    container
                    item
                    alignItems="flex-start"
                    justifyContent="center"
                    direction="column"
                  >
                    <Grid item>
                      <Typography fontSize={18} fontWeight="fontWeightBold">
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography fontSize={14}>${item.price}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
