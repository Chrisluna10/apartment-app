import React, { useEffect, useState } from "react"
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Button,
} from "@mui/material"
// import Car from "../../Assets/Car.png"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"

export default function Item(props) {
  const [item, setItem] = useState({})
  const navigate = useNavigate()
  const params = useParams()

  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props

  function fetchItem() {
    fetch(`http://localhost:3000/items/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        setItem({
          name: res.name,
          category: res.category,
          price: res.price,
          description: res.description,
          image: res.image.url,
        })
      )
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid container item direction="row" justifyContent="flex-start" xs={18}>
        {item && (
          <Grid>
            <img src={item.image} height={300} width={300} />
            <Grid>
              <Typography>{item.name}</Typography>
            </Grid>
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
              <Typography>{item.description}</Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}
