import React, { useEffect, useState } from "react"
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Button,
} from "@mui/material"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useNavigate } from "react-router-dom"
import { localhost, heroku } from "../../fetch-urls"

export default function Sorting({
  initialState,
  handlePriceDescending,
  handlePriceAscending,
  name
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const navigate = useNavigate()
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const buttonStyle = {
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: "black",
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ ...buttonStyle }}
      >
        Sort By: {name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={initialState}>Recent First (Default)</MenuItem>
        <MenuItem onClick={handlePriceAscending}>Price: Low to High</MenuItem>
        <MenuItem onClick={handlePriceDescending}>Price High to Low</MenuItem>
      </Menu>
    </div>
  )
}
