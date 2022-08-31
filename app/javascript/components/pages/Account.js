import { Button, Grid, TextField, Typography } from "@mui/material"
import * as Yup from "yup"
import { Formik } from "formik"
import React, { useState, useEffect } from "react"

export default function Account() {
  const [user, setUser] = useState([])

  function userFetch() {
    fetch("http://localhost:3000/current_user", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setUser(res.user))
  }

  useEffect(() => {
    userFetch()
  }, [])

  console.log(user)

  const Form = () => {
    return (
      <Grid container item direction="column" alignItems="center" spacing={5}>
        {user && (
          <Formik
            initialValues={{
              username: user.username,
              email: user.email
              
            }}
            onSubmit={(values) => editItem(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="username"
                    variant="standard"
                    onChange={handleChange("username")}
                    value={values.username}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    onChange={handleChange("email")}
                    value={values.email}
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
    <Grid container item >
      <Form />
    </Grid>
  )
}