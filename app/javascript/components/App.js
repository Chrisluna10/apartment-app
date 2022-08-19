import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemIndex from "./pages/ItemIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentEdit from "./pages/ApartmentEdit"
import ItemNew from "./pages/ItemNew"
import Item from "./pages/Item.js"

export default function App(props) {
  const [items, setItems] = useState([])

  function user() {
    fetch("http://localhost:3000/current_user", {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  useEffect(() => {
    user()
  }, [])

  // apartmentIndex = () => {
  //   fetch("http://localhost:3000/apartments")
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(apartmentsArray => {
  //     this.setState({ apartments: apartmentsArray})
  //   })
  //   .catch(errors => {
  //     console.log("index errors:", errors)
  //   })
  // }

  // itemIndex = () => {
  //   fetch("http://localhost:3000/items")
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(itemsArray => {
  //     this.setState({ items: itemsArray})
  //   })
  //   .catch(errors => {
  //     console.log("index errors:", errors)
  //   })
  // }

  // createNewApartment = (newApartment) => {
  //   fetch("http://localhost:3000/apartments", {
  //     body:JSON.stringify(newApartment),
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     method:"POST"
  //   })
  //   .then(response => response.json())
  //   .then(payload => this.apartmentIndex())
  //   .catch(errors => console.log("apartment create errors:", errors))
  //  }

  function createNewItem(newItem) {
    fetch("http://localhost:3000/items", {
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => setItems())
      .catch((errors) => console.log("Item create errors:", errors))
  }

  // function updateApartment(editapartment, id) {
  //   fetch(`/apartments/${id}`, {
  //     body: JSON.stringify(editapartment),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "PATCH",
  //   })
  //     .then((response) => response.json())
  //     .then((payload) => apartmentIndex())
  //     .catch((errors) => console.log("Apartment update errors:", errors))
  // }

  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props

  return (
    <Router>
      <Header {...props} />

      <Routes>
        <Route path="/" element={Home} />
        <Route
          path="/itemindex"
          element={<ItemIndex {...props} items={items} />}
        />
        {/* <Route
          path="/apartmentsshow/:id"
          element={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(
              (apartment) => apartment.id === +id
            )
            return <ApartmentShow apartment={apartment} />
          }}
        /> */}
        {/* <Route
          path="/apartmentsnew"
          element={
            <ApartmentNew {...props} createNewApartment={createNewApartment} />
          }
        /> */}
        <Route path="item/:id" element={<Item />} />

        {/* <Route
          path={"/apartmentsedit/:id"}
          element={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(
              (apartment) => apartment.id === +id
            )
            return (
              <ApartmentEdit
                updateApartment={updateApartment}
                apartment={apartment}
              />
            )
          }}
        /> */}
        <Route
          path="/itemnew"
          element={<ItemNew {...props} createNewItem={createNewItem} />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}
