import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-text" src={logo} alt="MRIme" />
      </div>
      
      <nav className="header__nav">
      <NavLink className="header__nav-links"
        to="/athletes"
      >
        Dashboard
      </NavLink>
      <NavLink className="header__nav-links"
        to="/"
      >
        Reports
      </NavLink>
      <NavLink className="header__nav-links"
        to="/"
      >
        Neuropsychology
      </NavLink>
      <NavLink className="header__nav-links"
        to="/"
      >
        Neurocardiology
      </NavLink>
      <NavLink className="header__nav-links"
        to="/"
      >
        Bookings
      </NavLink>
    </nav>
    <div className="img__placeholder"></div>
    </header>

    // <header className="header">
    //   <div className="header__logo">
    //     <img className="header__logo-text" src={logo} alt="MRIme" />
    //   </div>
    //   <nav className="header__nav">
    //     <ul>
    //       <li
    //       >
    //         Dashboard
    //       </li>
    //       <li
    //       >
    //         Reports
    //       </li>
    //       <li
    //       >
    //         Neuropsychology
    //       </li>
    //       <li
    //       >
    //         Neurocardiology
    //       </li>
    //       <li
    //       >
    //         Bookings
    //       </li>
    //     </ul>
       
    //   </nav>
    // </header>
  )
}

export default Header