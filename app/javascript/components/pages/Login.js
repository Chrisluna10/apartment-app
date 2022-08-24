import { Button, Grid, TextField, Typography } from "@mui/material"
import * as Yup from "yup"
import { Formik } from "formik"
import React, { useState } from "react"
import { useNavigate } from "react-router"
import RegistrationModal from "../components/RegistrationModal"

const validationSchema = Yup.object().shape({
  email: Yup.string().label("Email").required("Please enter your email"),
  password: Yup.string()
    .label("Password")
    .required("Please enter your password"),
})

const loginError = () => {
  return (
    <Grid>
      <Typography>Incorrect email or password</Typography>
    </Grid>
  )
}

export default function UserLogin(props) {
  const [loginFailed, setLoginFailed] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login(e) {
    e.preventDefault()

    fetch(`http://localhost:3000/users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "logged_in") {
          navigate("/")
        } else {
          alert("sign in unsucessful")
        }
      })
  }

  const form = () => {
    return (
      <Grid container item alignItems="center" justifyContent="center" direction="column">
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
        <Button onClick={login}>
          <Typography>Log In</Typography>
        </Button>
        <RegistrationModal />
      </Grid>
    )
  }

  return (
    <Grid container item justifyContent="center" alignItems="center">
      <Grid container item justifyContent="center">
        <Typography fontSize={40}>Sign Up/Log In</Typography>
      </Grid>
      <Grid container item justifyContent="center" marginTop={15}>
        <Grid
          container
          item
          border="solid 2px black"
          xs={4}
          height={360}
          width={250}
          direction="column"
          alignItems="center"
        >
          {form()}
        </Grid>
      </Grid>
    </Grid>
  )
}
