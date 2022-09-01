import { Button, Grid, TextField, Typography } from "@mui/material"
import * as Yup from "yup"
import { Formik } from "formik"
import React, { useState, useEffect } from "react"

export default function Account() {
  const [user, setUser] = useState({})

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

  function userEdit(values) {
    fetch("http://localhost:3000/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: values,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      // .then((res) => {
      //   if (res.status === "edit successful") {
      //     alert("Account updated")
      //     window.location.reload(false)
      //   } else {
      //     alert("Error")
      //   }
      // })
      .catch((err) => console.log(err))
  }

  const Form = () => {
    return (
      <Grid container item direction="column" alignItems="center" spacing={5}>
        <Grid item>
        <Typography fontWeight="bold" fontSize="35px">
        Account Information
      </Typography>
      </Grid>
        {user && (
          <Formik
            initialValues={{
              username: user.username,
              email: user.email,
            }}
            onSubmit={(values) => userEdit(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Username"
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
                  <Button onClick={() => handleSubmit()}>Edit Account Information</Button>
                </Grid>
              </>
            )}
          </Formik>
        )}
      </Grid>
    )
  }
  return (
    <Grid container justifyContent="center" direction="column">
      <Form />
    </Grid>
  )
}
