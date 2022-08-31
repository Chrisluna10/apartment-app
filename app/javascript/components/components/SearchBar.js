import { Grid, TextField, Button, Typography } from "@mui/material"
import * as React from "react"
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

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
}

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
}

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

export default function SearchBar() {
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
