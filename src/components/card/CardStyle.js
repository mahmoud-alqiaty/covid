import styled from "styled-components";

export const Container = styled.div `
    width: 32%;
    height: 200px;
    overflow: hidden;
    padding: 5px 10px;
    background-color: #fff;
    font-family: 'Cairo', sans-serif;
    border-bottom: ${({borderColor})=> `5px solid ${borderColor}`};
    border-radius: 3px;
`
export const Label = styled.h2 `
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 3px;
    border-bottom: 2px solid #aaa;
    font-weight: 700;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }

    @media screen and (max-width: 500px){
        font-size: 16px;
        border-bottom: 1px solid #aaa;
    }
`

export const DivCases = styled.div `
    font-size: 16px;
    border-bottom: 1px solid #eee;
    padding-bottom: 7px;
`

export const CasesNumber = styled.p `
    font-weight: 700;
    font-size: 24px;
    line-height: 0.9;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }

    @media screen and (max-width: 500px){
        font-size: 16px;
    }
`
export const Date = styled.p `
    font-size: 14px;
    font-style: italic;

    @media screen and (max-width: 600px){
        font-size: 12px;
        line-height: 0.9;
    }
`