import { Button, Grid, TextField, Typography } from "@mui/material"
import * as Yup from "yup"
import { Formik } from "formik"
import React, { useState } from "react"
import { useNavigate } from "react-router"

const validationSchema = Yup.object().shape({
  email: Yup.string().label("Email").required("Please enter your email"),
  password: Yup.string()
    .label("Password")
    .required("Please enter your password"),
  password_confirmation: Yup.string()
    .label("Confirm Password")
    .required("Please verify your password"),
})

const showError = (e) => {
  return (
    <Grid container item>
      <Typography>{e}</Typography>
    </Grid>
  )
}

export default function Registration(props) {
  // const [errorMessage, setErrorMessage] = useState("")
  // const [hasError, setError] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")

  // const hasPasswordError = (password, passwordConfirmation) => {
  //   if (password !== passwordConfirmation) {
  //     setErrorMessage("Passwords don't match")
  //     return true
  //   } else if (password.length < 6) {
  //     setErrorMessage("Password needs to be at least 6 characters")
  //     return true
  //   }
  //   return false
  // }

  // const hasUsernameError = (email) => {
  //   if (!(email.includes("@") && email.includes("."))) {
  //     setErrorMessage("Invalid email")
  //     return true
  //   }
  //   return false
  // }

  function register(e) {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "created") {
          alert("Account added. Please log in.")
          navigate("/login")
        } else {
          alert("registration unsucessful")
        }
      })
  }

  function form() {
    return (
      <>
        <TextField
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextField
          name="password_confirmation"
          placeholder="Verify Password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          value={password_confirmation}
        />
        <Button onClick={register}>
          <Typography>Register</Typography>
        </Button>
      </>
    )
  }

  return (
    <Grid container item justifyContent="center">
      <Grid container item justifyContent="center">
        <Typography fontSize={40}>Marketplace</Typography>
      </Grid>
      <Grid container item justifyContent="center" marginTop={15}>
        <Grid
          container
          item
          border="solid 2px black"
          xs={4}
          height={360}
          direction="column"
          alignItems="center"
        >
          {/* {hasError && showError(errorMessage)} */}
          {form()}
        </Grid>
      </Grid>
    </Grid>
  )
}
