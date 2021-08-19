import styled from 'styled-components'

export const Nav = styled.nav `
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
  }

  @media screen and (max-width: 992px){
    p{
      font-size: 48px;
    }
  }

  @media screen and (max-width: 768px){
    p{
      font-size: 36px;
    }
  }

  @media screen and (max-width: 600px){
    p{
      font-size: 24px;
    }
  }
  
`
export const LogoImg = styled.img `
  width: 40px;
  height: 50px;

  @media screen and (max-width: 992px){
    width: 30px;
    height: 40px;
  }

  @media screen and (max-width: 768px){
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 600px){
    width: 25px;
    height: 25px;
  }
`