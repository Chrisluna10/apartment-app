import {
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { Formik } from "formik"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"

export default function ItemNew() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const Selector = () => {
    return (
      <Grid container item width="220px">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"Electronics & Media"}>
              Electronics & Media
            </MenuItem>
            <MenuItem value={"Home & Garden"}>Home & Garden</MenuItem>
            <MenuItem value={"Clothing, Shoes & Accessories"}>
              Clothing, Shoes & Accessories
            </MenuItem>
            <MenuItem value={"Baby & Kids"}>Baby & Kids</MenuItem>
            <MenuItem value={"Vehicles"}>Vehicles</MenuItem>
            <MenuItem value={"Toys, Games & Hobbies"}>
              Toys, Games & Hobbies
            </MenuItem>
            <MenuItem value={"Sports & Outdoors"}>Sports & Outdoors</MenuItem>
            <MenuItem value={"Collectibles & Art"}>Collectibles & Art</MenuItem>
            <MenuItem value={"Pet Supplies"}>Pet Supplies</MenuItem>
            <MenuItem value={"Health & Beauty"}>Health & Beauty</MenuItem>
            <MenuItem value={"Wedding"}>Wedding</MenuItem>
            <MenuItem value={"Business Equipment"}>Business Equipment</MenuItem>
            <MenuItem value={"Tickets"}>Tickets</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    )
  }

  function addItem(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append("[item]name", name)
    formData.append("[item]category", category)
    formData.append("[item]price", price)
    formData.append("[item]description", description)
    formData.append("[item]image", image)

    fetch("http://localhost:3000/items", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "created") {
          alert("added")
          navigate("/profile")
        } else {
          alert("not added")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Grid container item border="2px solid red">
      <Grid container item direction="column" alignItems="center" spacing={5}>
        <>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Grid>
          <Grid item>
            <Selector />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Price"
              variant="standard"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              value={price}
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Grid>
          <Grid item>
            <TextField
              name="image"
              type="file"
              label="image"
              variant="standard"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
            {/* {image && <img src={image.url} height='150px' width='180px'/>} */}
          </Grid>
          <Grid item>
            <Button onClick={addItem}> Submit</Button>
          </Grid>
        </>
      </Grid>
    </Grid>
  )
}
