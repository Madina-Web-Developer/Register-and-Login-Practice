import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
  <>
  <nav className=' absolute pt-[35px]  w-full'>
    <div className="container">
        <div className="mina_nav">

            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="all_list">
                <ul>
                    <li><Link to={'#'} >Home</Link></li>
                    <li><Link to={'#'} >About Us</Link></li>
                    <li><Link to={'#'} >Contact Us</Link></li>
                    <li><Link to={'#'} >How it Works</Link></li>
                    <li><Link to={'#'} >Help</Link></li>
                    <li><Link to={'#'} >Hire Bike</Link></li>
                </ul>
            </div>
        </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar