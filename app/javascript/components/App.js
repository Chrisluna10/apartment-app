import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemIndex from "./pages/ItemIndex"
import ItemNew from "./pages/ItemNew"
import Item from "./pages/ItemShow"
import Profile from "./pages/Profile"
import UserItemShow from "./pages/UserItemShow"
import ItemEdit from "./pages/ItemEdit"

export default function App(props) {
  const [items, setItems] = useState([])
  // const {
  //   logged_in,
  //   current_user,
  //   new_user_route,
  //   sign_in_route,
  //   sign_out_route,
  // } = props

 

  return (
    <Router>
      <Header {...props} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/itemindex"
          element={<ItemIndex {...props} items={items} />}
        />
        <Route path="item/:id" element={<Item />} />
        <Route path="/itemnew" element={<ItemNew {...props} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/item/:id" element={<UserItemShow />} />
        <Route path="edititem/:id" element={<ItemEdit />} />
      </Routes>
      <Footer />
    </Router>
  )
}
