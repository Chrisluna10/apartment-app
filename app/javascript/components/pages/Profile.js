import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Button
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"

export default function Profile() {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const params = useParams()
 

  function userItems() {
    fetch("http://localhost:3000/user_index", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
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
    <Grid container direction="row" justifyContent="center">
      <Grid container item direction="row" justifyContent="flex-start" xs={18}>
        {items.map((item) => {
          return (
            <Card key={item.id} sx={{ maxWidth: 325, padding: 1.5 }}>
              <CardActionArea onClick={() => handleClick(item)}>
              <img src={item.image.url} height='150px' width='180px'/>
                <CardContent>
                  <Typography>{item.name}</Typography>
                </CardContent>
                <Grid
                  container
                  item
                  direction="column"
                  paddingLeft={1.5}
                  alignItems="flex-start"
                >
                  <Typography>{item.category}</Typography>
                  <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>${item.price}</Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          )
        })}
      </Grid>
    </Grid>
  )
}
