import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemNew from "./pages/ItemNew"
import Item from "./pages/ItemShow"
import Profile from "./pages/Profile"
import UserItemShow from "./pages/UserItemShow"
import ItemEdit from "./pages/ItemEdit"
import Vehicles from "./pages/Vehicles"

export default function App(props) {
  const [items, setItems] = useState([])

  function itemIndex() {
    fetch("http://localhost:3000/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((itemsArray) => setItems(itemsArray))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    itemIndex()
  }, [])

  return (
    <Router>
      <Header {...props}/>
      <Routes>
        <Route path="/" element={<Home {...props} items={items}/>} />
        <Route path="item/:id" element={<Item />} />
        <Route path="/itemnew" element={<ItemNew {...props} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/item/:id" element={<UserItemShow />} />
        <Route path="edititem/:id" element={<ItemEdit />} />
        <Route path="vehicles" element={<Vehicles items={items}/>} />
      </Routes>
      <Footer />
    </Router>
  )
}
