import { Button, Grid, TextField, Typography } from "@mui/material"
import * as Yup from "yup"
import { Formik } from "formik"
import { useState } from "react"
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
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [hasError, setError] = useState<boolean>(false)
  const navigate = useNavigate()

  const hasPasswordError = (password, passwordConfirmation) => {
    if (password !== passwordConfirmation) {
      setErrorMessage("Passwords don't match")
      return true
    } else if (password.length < 6) {
      setErrorMessage("Password needs to be at least 6 characters")
      return true
    }
    return false
  }

  const hasUsernameError = (email) => {
    if (!(email.includes("@") && email.includes("."))) {
      setErrorMessage("Invalid email")
      return true
    }
    return false
  }

 function register() {
    
    if (
      hasPasswordError(
        credentials.password,
        credentials.password_confirmation
      ) ||
      hasUsernameError(credentials.email)
    ) {
      setError(true)
    } else {
      fetch("http://localhost:3000/users/sign_up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: formData,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "created") {
            props.handleLogin(res.user)
            navigate("/home")
          }
        })
    }
  }

  function form() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => register(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <TextField
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              value={values.email}
            />
            <TextField
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              value={values.password}
            />
            <TextField
              name="password_confirmation"
              placeholder="Verify Password"
              onChange={handleChange("password_confirmation")}
              value={values.password_confirmation}
            />
            <Button onClick={() => handleSubmit()}>
              <Typography>Register</Typography>
            </Button>
          </>
        )}
      </Formik>
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
          {hasError && showError(errorMessage)}
          {form()}
        </Grid>
      </Grid>
    </Grid>
  )
}
