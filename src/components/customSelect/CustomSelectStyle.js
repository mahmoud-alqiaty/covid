import styled from "styled-components";
import {AiOutlineDown} from "react-icons/ai";


export const Container = styled.div `
    width: 500px ;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1100px){
        width: ${({responsive})=> responsive && "300px"} ;
    }
    @media screen and (max-width: 600px){
        width: ${({responsive})=> responsive && "160px"} ;
    }

    
`
export const Label = styled.h4 `
    font-family: sans-serif;
`
export const DataContainer = styled.div `
    width: 300px;
    position: relative;
`

export const Header = styled.div `
    width: 100%;
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px #fff;
    font-family: sans-serif;
    cursor: pointer;
    border-bottom: 2px solid #999;
`
export const HeaderText = styled.span `
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    font-style: italic;
`
export const HeaderIcon = styled(AiOutlineDown) `
    font-size: 16px;
`
export const DropList = styled.div `
    display: ${({openList})=> openList? "block" : "none"};
    width: 100%;
    box-shadow: 0 0 3px #fff;
    border: 1px solid #fff;
    position: absolute;
    left: 0;
    top: 43px;
    z-index: 2;
    background-color: #888;

`
export const SearchBox = styled.input `
    width: 90%;
    display: block;
    margin: 10px auto;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 14px;

`
export const DropList_Items = styled.p `
     height: 300px;
    overflow: auto;
`
export const DropList_Item = styled.p `
    padding: 5px 10px;
    font-size: 14px;
    color: #fff;
    font-family: sans-serif;
    cursor: pointer;

    &&:hover{
        background-color: #aaa;
    }
`