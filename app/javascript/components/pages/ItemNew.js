import { Button, Grid, TextField } from "@mui/material"
import { Formik } from "formik"
import { useNavigate } from "react-router-dom";
import React from "react"


export default function ItemNew() {
  const navigate = useNavigate()

  const addItem = (values) => {
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: values,
      }),
    })
    .then((res) => res.json())
    // .then((res) => console.log(res))
      .then((response) => {
        if (response.status === 401) {
          alert("not added")
        } else {
          alert("added")
          navigate("/")
        }
      })
      .catch((err) => console.log(err))
  }

  const Form = () => {
    return (
      <Grid container item direction="column" alignItems="center" spacing={5}>
        <Formik
          initialValues={{
              name: "",
              category: "",
              price: "",
              description: ""
          }}
          onSubmit={(values) => addItem(values)}
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
      </Grid>
    )
  }
  return (
    <Grid container item border="2px solid red">
      <Form />
    </Grid>
  )
}
