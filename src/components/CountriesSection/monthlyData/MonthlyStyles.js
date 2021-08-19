import styled from "styled-components";

export const MonthlyContainer = styled.div `
    width: 100%;
`
export const MonthlySelect = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const MonthlyChart = styled.div `
    width: 100%;
    height: 400px;
    margin: 80px auto;

    h3{
        text-transform: capitalize;
        font-family: 'Cairo', sans-serif;
    }

    .confirmed{
        color: green;
    }
    .deathes{
        color: rgb(209 209 237);
    }

    @media screen and (max-width: 600px){
        margin: 40px auto 70px;
        h3{
            font-size: 14px;
        }
    }
`