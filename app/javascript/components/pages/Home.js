import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Marketplace App</h3>
        {logged_in && <h3>{user.email}</h3>}
          <br />
          <NavLink to="/itemindex">Items</NavLink>
        
      </div>
    )
  }
}
export default Home