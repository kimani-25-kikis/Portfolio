import React from 'react'
import './Navbar.css'

import Logo from '../../assets/joshua.jfif';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="Joshua Image" width={100} />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className='nav-contact'> Contact Me</div>
    </div>
  )
}

export default Navbar