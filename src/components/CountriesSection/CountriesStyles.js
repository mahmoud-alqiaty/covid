import styled from "styled-components"

export const Container = styled.div `
    margin-top: 50px;

    @media screen and (max-width: 600px){
        margin-top: 25px;
    }
`
export const BorderDiv = styled.div `
    height: 2px; 
    width: 100%;
    background-color: #ddd;
    margin: 70px auto 20px;
`