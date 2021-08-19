import React from 'react'
import logoImg from '../../images/CoV.png'

import {Nav, LogoImg} from './NavbarStyles'


const Navbar = () => {
  return (
    <Nav>
      <div>
          <p>
            <span>c</span>
            <LogoImg src={logoImg} />
            <span>vid-19 </span>
            <span>tracker over the world </span>
          </p>
      </div>
    </Nav>
  )
}

export default Navbar
