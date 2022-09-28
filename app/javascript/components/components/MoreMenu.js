import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useNavigate } from "react-router-dom"
import { localhost, heroku } from "../../fetch-urls"
import { styled } from "@mui/system"
import { Typography } from "@mui/material"

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
}

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
}

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const navigate = useNavigate()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const businessEquipmentRoute = () => {
    navigate("/businessequipment")
  }

  const ticketsRoute = () => {
    navigate("/tickets")
  }

  const buttonStyle = {
    fontFamily: "IBM Plex Sans, sans-serif",
    fontSize: "0.875rem",
    borderRadius: "12px",
    lineHeight: "1.5",
    background: "none",
    textTransform: "none",
    border: "none",
    color: `black`,
    "&:hover": {
      backgroundColor: "transparent",
    },
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
        More
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
        <MenuItem onClick={businessEquipmentRoute}>Business Equipment</MenuItem>
        <MenuItem onClick={ticketsRoute}>Tickets</MenuItem>
      </Menu>
    </div>
  )
}
