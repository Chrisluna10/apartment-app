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

export default function UserItemShow(props) {
  const [item, setItem] = useState({})
  const navigate = useNavigate()
  const params = useParams()

  function fetchItem() {
    fetch(`http://localhost:3000/items/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((item) => setItem(item))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchItem()
  }, [])

  function deleteItem() {
    fetch(`http://localhost:3000/items/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "destroyed") {
          alert("Item Deleted")
          navigate("/profile")
        } else {
          alert("not added")
        }
      })
      .catch((err) => console.log(err))
  }

  const editItem = () => {
    navigate({
      pathname: `/edititem/${params.id}`,
    })
  }

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid container item direction="row" justifyContent="flex-start" xs={18}>
        {item && (
          <Grid>
            <img src={item.image} height={170} />
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
            <Button onClick={() => deleteItem()}>
              <Typography>Delete Item</Typography>
            </Button>
            <Button onClick={() => editItem()}>
              <Typography>Edit Item</Typography>
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}
