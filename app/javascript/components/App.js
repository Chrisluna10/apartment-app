import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemNew from "./pages/ItemNew"
import Item from "./pages/ItemShow"
import Selling from "./pages/Selling"
import UserItemShow from "./pages/UserItemShow"
import ItemEdit from "./pages/ItemEdit"
import Vehicles from "./pages/categories/Vehicles"
import HomeAndGarden from "./pages/categories/HomeAndGarden"
import PetSupplies from "./pages/categories/PetSupplies"
import SportsAndOutdoors from "./pages/categories/SportsAndOutdoors"
import ToysAndGames from "./pages/categories/ToysGamesHobbies"
import HealthAndBeauty from "./pages/categories/HealthAndBeauty"
import ElectronicsAndMedia from "./pages/categories/ElectronicsAndMedia"
import CollectiblesAndArt from "./pages/categories/CollectiblesAndArt"
import ClothingShoesAccessories from "./pages/categories/ClothingShoesAccessories"
import Wedding from "./pages/categories/Wedding"
import BabyAndKids from "./pages/categories/BabyAndKids"
import Account from "./pages/Account"

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
        <Route path="selling" element={<Selling />} />
        <Route path="selling/item/:id" element={<UserItemShow />} />
        <Route path="edititem/:id" element={<ItemEdit />} />
        <Route path="vehicles" element={<Vehicles items={items}/>} />
        <Route path="home&garden" element={<HomeAndGarden items={items}/>} />
        <Route path="petsupplies" element={<PetSupplies items={items}/>} />
        <Route path="wedding" element={<Wedding items={items}/>} />
        <Route path="toys" element={<ToysAndGames items={items}/>} />
        <Route path="sports&outdoors" element={<SportsAndOutdoors items={items}/>} />
        <Route path="health&beauty" element={<HealthAndBeauty items={items}/>} />
        <Route path="electronics&media" element={<ElectronicsAndMedia items={items}/>} />
        <Route path="collectibles&art" element={<CollectiblesAndArt items={items}/>} />
        <Route path="clothing" element={<ClothingShoesAccessories items={items}/>} />
        <Route path="baby&kids" element={<BabyAndKids items={items}/>} />
        <Route path="account" element={<Account />} />
      </Routes>
      <Footer />
    </Router>
  )
}
