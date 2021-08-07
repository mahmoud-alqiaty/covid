import React from 'react'
import styled from 'styled-components'
import logoImg from '../../images/CoV.png'

const Nav = styled.nav `
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    text-align: center;

    p:first-child{
        font-family: 'Oswald', sans-serif;
        font-size: 60px;
        font-weight: 700;
        text-transform: uppercase;

    }
    p:last-child{
        font-family: 'Georama', sans-serif;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;

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
            <span>tracker in us </span>
          </p>
          <p>
              from
              <span> jun 13, 2020 </span>
              to
              <span> march 07, 2020 </span>
          </p>
      </div>
    </Nav>
  )
}

export default Navbar
