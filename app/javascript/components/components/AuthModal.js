import * as Yup from "yup"
import { Button, Grid, TextField, Typography, Modal, Box } from "@mui/material"
import { Formik } from "formik"
import React, { useState } from "react"
import { useNavigate } from "react-router"
import { localhost, heroku } from "../../fetch-urls"
import ButtonUnstyled, { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { styled } from "@mui/system"
import offerup from "../../assets/offerup.png"
import Login from "../components/LoginModal"

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  border-radius: 18px;
  height: 36px;
  width: 420px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #00a87e;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #00a87e;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 475,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const buttonStyle = {
  "&:hover": {
    backgroundColor: "transparent",
  },
  color: "black",
}

export default function RegistrationModal(props) {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }


  return (
    <>
      <Button onClick={handleOpen} sx={{ ...buttonStyle }}>
        Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Grid container item justifyContent="center">
            <Grid container item justifyContent="center">
              <Typography fontSize={25} fontWeight="bold" fontFamily="sans-serif">Sign up / Log in</Typography>
            </Grid>
            <Grid padding={4}>
            <img src={offerup} height={35} width={118}></img>
            </Grid>
            <Grid container item justifyContent="center">
              <Grid
                container
                item
                justifyContent="center"
                width={450}
              >
                <Grid container item padding={2}>
                  <CustomButton sx={{backgroundColor: "#156ad9"}}>
                    <Typography>Continue with Facebook</Typography>
                  </CustomButton>
                </Grid>
                <Grid container item padding={2}>
                  <CustomButton sx={{backgroundColor: "#4c8bf5"}}>
                    <Typography>Continue with Google</Typography>
                  </CustomButton>
                </Grid>
                <Grid container item padding={2}>
                  <CustomButton sx={{border: "solid 1px #000000", backgroundColor: "#ffffff"}}>
                    <Typography sx={{color: "#000000"}}>Continue with Apple</Typography>
                  </CustomButton>
                </Grid>
                <Grid container item padding={2}>
                  <CustomButton sx={{border: "solid 1px #00a87e", backgroundColor: "#ffffff"}}>
                    <Typography sx={{color: "#00a87e"}}>Continue with email</Typography>
                  </CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}
