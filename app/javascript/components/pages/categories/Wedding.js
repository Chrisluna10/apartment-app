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

export default function Wedding(props) {
  const navigate = useNavigate()
  let { items } = props

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }

  const weddings = items.filter((item) => {
    return item.category === "Wedding"
  })

  return (
    <Grid container item>
      {weddings.map((wedding) => {
        return (
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            columns={6}
            xs
            padding={0.8}
            key={wedding.id}
          >
            <Card xs={1} sx={{ maxWidth: 200 }}>
              <CardActionArea onClick={() => handleClick(wedding)}>
                <img src={wedding.image_url} height="150px" width="180px" />
                <CardContent>
                  <Typography fontWeight="fontWeightBold">
                    {wedding.name}
                  </Typography>
                </CardContent>
                <Grid
                  container
                  item
                  direction="column"
                  padding={1}
                  alignItems="flex-start"
                >
                  <Typography>{wedding.category}</Typography>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>${wedding.price}</Typography>
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