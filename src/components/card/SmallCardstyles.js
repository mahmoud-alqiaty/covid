import styled from 'styled-components'
import {SiCoronaengine} from 'react-icons/si'
import {HiEmojiSad} from 'react-icons/hi'

export const Container = styled.div `
  width: 250px;
  padding: 15px;
  margin: 0 10px;
  background-color: #fff;
  box-shadow: 0 0 4px #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 550px){
    margin-bottom: 15px;
  }
`
export const IconContainer = styled.div `
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({emoj_Bg})=> emoj_Bg};
`
export const SadIcon = styled(HiEmojiSad) `
  font-size: 36px;
  color: ${({emoj_color})=> emoj_color};
`
export const ConfirmedIcon = styled(SiCoronaengine) `
  font-size: 30px;
  color: ${({emoj_color})=> emoj_color};
`
export const Info = styled.div `
  font-family: 'Cairo', sans-serif;
  line-height: 1;

  @media screen and (max-width: 768px){
    h2{
        font-size: 24px;
    }
  }

  @media screen and (max-width: 550px){
    h2{
        font-size: 18px;
    }
  }
`