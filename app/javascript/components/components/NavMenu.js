import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useNavigate } from "react-router-dom"
import {localhost, heroku} from "../../fetch-urls"

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const navigate = useNavigate()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const accountRoute = () => {
    navigate("/account")
  }

  const sellingRoute = () => {
    navigate("/selling")
  }

  const addItemRoute = () => {
    navigate("/itemnew")
  }

  const buttonStyle = {
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: "black",
  }

  function signOut() {
    fetch(`${heroku}/users/sign_out`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "signed_out") {
          alert("Signed Out")
          navigate("/")
          window.location.reload(false)
        } else {
          alert("user not signed out")
        }
      })
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
        Account
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
        <MenuItem onClick={accountRoute}>Account</MenuItem>
        <MenuItem onClick={sellingRoute}>Selling</MenuItem>
        <MenuItem onClick={addItemRoute}>Add Item</MenuItem>
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
