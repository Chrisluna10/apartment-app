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

export default function ToysAndGames(props) {
  const navigate = useNavigate()
  let { items } = props

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }

  const toys = items.filter((item) => {
    return item.category === "Toys, Games & Hobbies"
  })

  return (
    <Grid container item>
      {toys.map((toy) => {
        return (
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            columns={6}
            xs
            padding={0.8}
            key={toy.id}
          >
            <Card xs={1} sx={{ maxWidth: 200 }}>
              <CardActionArea onClick={() => handleClick(toy)}>
                <img src={toy.image_url} height="150px" width="180px" />
                <CardContent>
                  <Typography fontWeight="fontWeightBold">
                    {toy.name}
                  </Typography>
                </CardContent>
                <Grid
                  container
                  item
                  direction="column"
                  padding={1}
                  alignItems="flex-start"
                >
                  <Typography>{toy.category}</Typography>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>${toy.price}</Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}