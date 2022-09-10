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
import Sorting from "../components/Sorting"
import indexHook from "../customHooks/indexHook"
// import image from "../../assets/no_image.webp"

const styles = {
  cardAction: {
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  cardStyle: {
    display: "block",
    height: 250,
    maxWidth: 175,
  },
  gridContainer: {
    paddingLeft: "15px",
    paddingRight: "5px",
  },
}

export default function Home(props) {
  const navigate = useNavigate()
  const [items, setItems] = indexHook()
  const [name, setName] = useState('Recent First(Default)')

  useEffect(() => {
    setItems(props.items)
  }, [props.items])

  function initialState() {
    setItems(props.items)
    setName('Recent First(Default')
  }

  function handlePriceAscending() {
    const priceAscending = [...items].sort((a, b) => {
      return a.price > b.price ? 1 : -1
    })
    setItems(priceAscending)
    setName('Price: Low to High')
  }

  function handlePriceDescending() {
    const priceDescending = [...items].sort((a, b) => {
      return a.price < b.price ? 1 : -1
    })
    setItems(priceDescending)
    setName('Price: High to Low ')
  }

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }

  return (
    <Grid container columns={14} style={styles.gridContainer}>
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
              <CardActionArea onClick={() => handleClick(item)}>
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
