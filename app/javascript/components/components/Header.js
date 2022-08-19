import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component{ 
  render(){ 
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route,
      } = this.props
      return (
       
        <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/apartmentsindex">Apartments</a>
        <a href="#contact">Contact</a>
        { logged_in && <NavLink to="/itemnew">Add Item</NavLink> }
       { logged_in && <NavLink to="/apartmentsnew">Add Apartment</NavLink> }
        { logged_in  &&
            <div>
              <a href={sign_out_route }>Sign Out</a>
            </div>
          }
          { !logged_in &&
            <div>
              <a href={ sign_in_route }>Sign In</a>
            </div>
          }
      </div>
      )
    }
  }

export default Header; 