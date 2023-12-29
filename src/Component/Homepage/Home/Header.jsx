import React from 'react'
import header from '../Home/header.css'
import logo from '../../../Images/Spalogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="content">

            {/* logo */}
          <div className="logo">
              <a ><img src={logo} alt="Logo" className='Logo-img' /></a>
          </div>
        {/* Menu bar */}
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <Link to='/Product'><li><a href="">Products</a></li></Link>
            <li><a href="">Spa Services</a></li>
            <li><a href="">Book Appointment</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="get">Get 20% OFF When You Book A Spa Day For Your Animal Today!</div>
        
    </div>
  )
}

export default Header