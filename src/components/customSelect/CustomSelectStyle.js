import styled from "styled-components";
import {AiOutlineDown} from "react-icons/ai";
export const Container = styled.div `
    width: 200px;
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

`
export const HeaderText = styled.span `
    font-size: 16px;
    font-weight: bold;
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
    top: 50px;
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