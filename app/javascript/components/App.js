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

  return (
    <Router>
      <Header {...props}/>
      <Routes>
        <Route path="/" element={<Home {...props}/>} />
        <Route path="item/:id" element={<Item />} />
        <Route path="/itemnew" element={<ItemNew {...props} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/item/:id" element={<UserItemShow />} />
        <Route path="edititem/:id" element={<ItemEdit />} />
        <Route path="vehicles" element={<Vehicles />} />
      </Routes>
      <Footer />
    </Router>
  )
}
