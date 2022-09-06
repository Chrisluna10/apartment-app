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
      <Typography>Incorrect username or password</Typography>
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
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function login() {
    fetch(`https://marketplace-app-cl.herokuapp.com/users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "logged_in") {
          window.location.reload(false)
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
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
          Log In
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
