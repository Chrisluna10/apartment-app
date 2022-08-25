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
const buttonStyle = {
  "&:hover": {
    backgroundColor: "transparent",
  },
  color: "black",
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
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        direction="column"
        height={400}
        width={250}
      >
        <Grid container item justifyContent="center" paddingBottom={1}>
          <TextField
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Grid>
        <Grid container item justifyContent="center" paddingBottom={1}>
          <TextField
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Grid>
        <Button onClick={login} sx={{ ...buttonStyle }}>
          <Typography>Log In</Typography>
        </Button>
        <RegistrationModal />
      </Grid>
    )
  }

  return (
    <Grid container item justifyContent="center" alignItems="center">
      <Grid container item justifyContent="center">
        <Typography fontSize={40}>Log In/Sign Up</Typography>
      </Grid>
      <Grid container item justifyContent="center" height={400} width={280}>
        {form()}
      </Grid>
    </Grid>
  )
}
