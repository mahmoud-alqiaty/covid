import styled from "styled-components";

export const MonthlyContainer = styled.div `
    width: 100%;
`
export const MonthlySelect = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* @media screen and (max-width: 600px){
        font-size: 12px;
        line-height: 0.9;
    } */

`

export const MonthlyChart = styled.div `
    width: 100%;
    height: 400px;
    margin: 80px auto;

    h3{
        text-transform: capitalize;
        font-family: 'Cairo', sans-serif;
    }

    @media screen and (max-width: 500px){
        h3{
            font-size: 14px;
        }
    }
`