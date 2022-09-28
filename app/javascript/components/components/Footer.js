import { Link } from "react-router-dom"
import { Typography, Grid, Button } from "@mui/material"
import React from "react"
import ButtonUnstyled, { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { styled } from "@mui/system"

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #00a87e;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  padding: 12px 24px;

  &:hover {
    background-color: none;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: none;
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

const textStyle = {
  color: "white",
  fontSize: "15px",
}

export default function Footer() {
  return (
    <Grid
      container
      direction="row"
      bottom="0"
      minHeight="60px"
      backgroundColor="#00a87e"
    >
      <Grid
        container
        item
        xs={4}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <CustomButton
          target="_blank"
          onClick={() =>
            window.location.assign(
              "https://github.com/Chrisluna10/marketplace-app"
            )
          }
        >
          Code for this Project
        </CustomButton>
        <CustomButton
          target="_blank"
          onClick={() =>
            window.location.assign("https://github.com/Chrisluna10/")
          }
        >
          Chris Luna's Github
        </CustomButton>
      </Grid>
      <Grid
        container
        item
        xs={4}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography style={textStyle}>
          Created by: Chris Luna
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={4}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <CustomButton
          onClick={() =>
            window.location.assign(
              "https://www.linkedin.com/in/chris-luna-09a755219/"
            )
          }
        >
          LinkedIn
        </CustomButton>
        <CustomButton
          onClick={() =>
            window.location.assign("https://chrisluna10.github.io/")
          }
        >
          Portfolio
        </CustomButton>
      </Grid>
    </Grid>
  )
}
