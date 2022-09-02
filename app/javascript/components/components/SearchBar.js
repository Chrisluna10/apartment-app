import { Grid, TextField, Button, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import SearchIcon from "@mui/icons-material/Search"
import InputUnstyled from "@mui/base/InputUnstyled"
import ButtonUnstyled, { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { styled } from "@mui/system"

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #00a87e;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
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
const StyledInputElement = styled("input")(
  ({ theme }) => `
    width: 320px;
    height: 40px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    color: black;
    background: white;
    border: 1px solid #00a87e;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  
    &:hover {
      background: white;
      border-color: #00a87e;
    }
  
    &:focus {
      outline: 1px solid #00a87e;
    }
  `
)

export default function SearchBar() {
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled
        placeholder="Search"
        components={{ Input: StyledInputElement }}
        {...props}
        ref={ref}
      />
    )
  })

  return (
    <Grid container direction="row" width="349px">
      <Grid container item xs={11}>
        <CustomInput />
      </Grid>
      <Grid container item xs={1}>
        <CustomButton>
          <SearchIcon />
        </CustomButton>
      </Grid>
    </Grid>
  )
}
