import React, { useEffect, useState } from "react"
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material"
// import Car from "../../Assets/Car.png"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"

const styles = {
  borderStyle: {
    
  }
}

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
          image: res.image_url,
          username: res.username,
          time: res.formatted_time,
          user_created: res.user_created,
        })
      )
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <>
      {item && (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          columns={12}
        >
          <Grid
            container
            item
            xs={8}
            justifyContent="center"
            backgroundColor="#f2f2f2"
          >
            <Grid item>
              <Box
                component="img"
                sx={{
                  height: 500,
                  width: 600,
                }}
                src={item.image}
              />
            </Grid>
          </Grid>

          <Grid container item xs={4} direction="column">
            <Grid
              container
              item
              direction="column"
              paddingLeft={1.5}
              alignItems="flex-start"
              xs={8}
              borderBottom="1px solid #9b9ba4"
            >
              <Typography fontWeight="bold" fontSize={35}>
                {item.name}
              </Typography>
              <Typography fontWeight="bold" fontSize={40}>
                ${item.price}
              </Typography>
              <Typography>{item.category}</Typography>
              <Typography>{item.description}</Typography>
              <Typography>date posted: {item.time}</Typography>
            </Grid>

            <Grid
              container
              item
              direction="column"
              paddingLeft={1.5}
              alignItems="flex-start"
              xs={4}
            >
              <Typography>posted by: {item.username}</Typography>
              <Typography>member since {item.user_created}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}
