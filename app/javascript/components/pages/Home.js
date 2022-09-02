import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate, useParams } from "react-router"
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material"

const styles = {
  cardAction: {
    "&:hover $focusHighlight": {
      opacity: 0
    }
  },
  cardStyle: {
    display: "block",
    height: 250,
    maxWidth: 175,
  },
  gridContainer: {
    paddingLeft: "15px",
    paddingRight: "5px"
  }
}

export default function Home(props) {
  const navigate = useNavigate()
  let { items } = props

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }

  return (
    <Grid container columns={14} style={styles.gridContainer}>
      {items.map((item) => {
        return (
          <Grid item xs={7} sm={3.5} md={2} padding={0.8} key={item.id}>
            <Card style={styles.cardStyle}>
              <CardActionArea onClick={() => handleClick(item)}>
                <img src={item.image_url} style={{
                  maxHeight: 150,
                  maxWidth: 180
                }}/>
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
