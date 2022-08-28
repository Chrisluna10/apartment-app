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

export default function HealthAndBeauty(props) {
  const navigate = useNavigate()
  let { items } = props

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }

  const datas = items.filter((item) => {
    return item.category === "Health & Beauty"
  })

  return (
    <Grid container item>
      {datas.map((data) => {
        return (
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            columns={6}
            xs
            padding={0.8}
            key={data.id}
          >
            <Card xs={1} sx={{ maxWidth: 200 }}>
              <CardActionArea onClick={() => handleClick(data)}>
                <img src={data.image_url} height="150px" width="180px" />
                <CardContent>
                  <Typography fontWeight="fontWeightBold">
                    {data.name}
                  </Typography>
                </CardContent>
                <Grid
                  container
                  item
                  direction="column"
                  padding={1}
                  alignItems="flex-start"
                >
                  <Typography>{data.category}</Typography>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>${data.price}</Typography>
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