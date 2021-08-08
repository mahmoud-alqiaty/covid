import React from 'react'
import styled from 'styled-components'
import logoImg from '../../images/CoV.png'

const Nav = styled.nav `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    p{
        font-family: 'Oswald', sans-serif;
        font-size: 60px;
        font-weight: 700;
        text-transform: uppercase;
        /* line-height: 0.9; */

    }
`
const LogoImg = styled.img `
    width: 30px;
    height: 40px;
`

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
