import styled from "styled-components";


export const Container = styled.div `
    width: 230px;
    height: 220px;
    overflow: hidden;
    padding: 5px 10px;
    background-color: #fff;
    font-family: 'Cairo', sans-serif;
    border-bottom: ${({borderColor})=> `8px solid ${borderColor}`};
    border-radius: 3px;
`
export const Label = styled.h2 `
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 3px;
    border-bottom: 2px solid #aaa;
    font-weight: 700;
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
`
export const Date = styled.p `
    font-size: 14px;
`