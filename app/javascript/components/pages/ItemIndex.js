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
import Car from "../../Assets/Car.png"

export default function ItemIndex(props) {
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  function itemsInfo() {
    fetch("http://localhost:3000/items", {
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
    itemsInfo()
  }, [])

  const handleClick = (item) => {
    navigate({
      pathname: `/item/${item.id}`,
    })
  }
console.log(items)
  return (
      <Grid container item direction="row" justifyContent="center" columns={6} >
        {items.map((item) => {
          return (
            <Card key={item.id} xs={1} sx={{ maxWidth: 200, padding: 1 }}>
              <CardActionArea onClick={() => handleClick(item)}>
                <img src={item.image.url} height={170} width="auto"/>
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
  )
}
