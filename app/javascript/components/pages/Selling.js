import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

export default function Selling() {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  function userItems() {
    fetch("https://marketplace-app-cl.herokuapp.com/user_index", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((itemsArray) => setItems(itemsArray))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    userItems()
  }, [])

  const handleClick = (item) => {
    navigate({
      pathname: `item/${item.id}`,
    })
  }
  return (
    <Grid container item justifyContent="center">
      <Typography fontWeight="bold" fontSize="30px">
        Selling
      </Typography>
      {items.map((item) => {
        console.log(item)
        return (
          <Grid container justifyContent="center" padding={0.8} key={item.id}>
            <Grid item width="600px">
              <Card>
                <CardActionArea onClick={() => handleClick(item)}>
                  <CardContent>
                    <Grid container direction="row" spacing={4}>
                      <Grid item xs={3.5}>
                        <img src={item.image_url} height="80px" width="95px" />
                      </Grid>
                      <Grid item xs={4.5}>
                        <Typography fontWeight="fontWeightBold" fontSize={14}>
                          {item.name}
                        </Typography>
                        <Typography fontSize={14}>${item.price}</Typography>
                        <Typography fontSize={14}>
                          Created {item.formatted_time}
                        </Typography>
                      </Grid>
                      <Grid container  item xs={3.5} justifyContent="flex-end">
                        <Grid item paddingTop={3}>
                        <ArrowForwardIosIcon />
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
