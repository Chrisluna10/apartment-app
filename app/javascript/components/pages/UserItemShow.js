import React, { useEffect, useState } from "react"
import { Typography, Grid, Button, Box } from "@mui/material"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"

export default function UserItemShow(props) {
  const [item, setItem] = useState([])
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
      .then((res) =>
        setItem({
          name: res.name,
          category: res.category,
          price: res.price,
          description: res.description,
          image: res.image_url,
        })
      )
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
    <>
      {item && (
        <Grid
          container
          item
          direction="row"
          justifyContent="flex-start"
          columns={12}
        >
          <Box
            border="solid green 2px"
            component="img"
            xs={8}
            sx={{
              height: 500,
              width: 600,
            }}
            src={item.image}
          />

          <Grid container item border="solid red 2px" xs={4}>
            <Grid
              container
              item
              direction="column"
              paddingLeft={1.5}
              alignItems="flex-start"
            >
              <Typography fontWeight="bold" fontSize={40}>
                {item.name}
              </Typography>
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
        </Grid>
      )}
    </>
  )
}
