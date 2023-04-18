import React from 'react'
import { Link } from "react-router-dom"
import "../styles/navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <>

      <div className="navbar">


        <div className="navbar__img">
          <img src="../images/navbar/logo.png" alt="" />
        </div>

        <ul className="navbar__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/team"> Team</Link></li>
          <li><Link to="/cars"> Cars</Link></li>
          <li><Link to="/contact"> Contact</Link></li>
        </ul>

        <div className="navbar__buttons">
          <Link className="navbar__buttons__sign-in" to="/">Sign In</Link>
          <Link className="navbar__buttons__register" to="/register"> Register</Link>
        </div>

        <FontAwesomeIcon icon={faBars} className='toggle'/>

       


      </div>

    </>
  )
}

export default Navbar


