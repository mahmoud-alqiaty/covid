import styled from "styled-components";

export const Globalcontainer = styled.div `
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 550px){
       flex-direction: column;
       align-items: center;
       width: 350px
    }
`