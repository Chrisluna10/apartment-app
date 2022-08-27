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

export default function Vehicles(props) {
  const navigate = useNavigate()
  let { items } = props

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }

  const vehicles = items.filter((item) => {
    return item.category === "Vehicles"
  })

  return (
    <Grid container item>
      {vehicles.map((vehicle) => {
        return (
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            columns={6}
            xs
            padding={0.8}
            key={vehicle.id}
          >
            <Card xs={1} sx={{ maxWidth: 200 }}>
              <CardActionArea onClick={() => handleClick(vehicle)}>
                <img src={vehicle.image_url} height="150px" width="180px" />
                <CardContent>
                  <Typography fontWeight="fontWeightBold">
                    {vehicle.name}
                  </Typography>
                </CardContent>
                <Grid
                  container
                  item
                  direction="column"
                  padding={1}
                  alignItems="flex-start"
                >
                  <Typography>{vehicle.category}</Typography>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>${vehicle.price}</Typography>
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
