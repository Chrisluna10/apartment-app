import { Button, Grid, TextField } from "@mui/material"
import { Formik } from "formik"
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ItemEdit() {
  const navigate = useNavigate()
  const [item, setItem] = useState({})
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

  function editItem(values) {
    fetch(`http://localhost:3000/items/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: values,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "created") {
          alert("Item updated")
          navigate(`/item/${params.id}`)
        } else {
          alert("not added")
        }
      })
      .catch((err) => console.log(err))
  }

  const Form = () => {
    return (
      <Grid container item direction="column" alignItems="center" spacing={5}>
        {item && (
          <Formik
            initialValues={{
              name: item.name,
              category: item.category,
              price: item.price,
              description: item.description,
            }}
            onSubmit={(values) => editItem(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    onChange={handleChange("name")}
                    value={values.name}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Category"
                    variant="standard"
                    onChange={handleChange("category")}
                    value={values.category}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Price"
                    variant="standard"
                    onChange={handleChange("price")}
                    value={values.price}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    onChange={handleChange("description")}
                    value={values.description}
                  />
                </Grid>
                <Grid item>
                  <Button onClick={() => handleSubmit()}> Submit</Button>
                </Grid>
              </>
            )}
          </Formik>
        )}
      </Grid>
    )
  }
  return (
    <Grid container item border="2px solid red">
      <Form />
    </Grid>
  )
}
