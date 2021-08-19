import styled from "styled-components";

export const LastDataContainer = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  column-gap: 15px;
  justify-content: space-between;

  @media screen and (max-width: 700px){
    grid-template-columns: 100%;
    justify-content: center;
    row-gap: 30px;
  }
`

export const CardsContainer = styled.div `
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
export const LastChartContainer = styled.div `
  width: 100%;
  height: 300px;

  h3{
    text-transform: capitalize;
    font-family: 'Cairo', sans-serif;
    text-align: center;
  }
`