import React from 'react'
import styled, { css } from 'styled-components'
import {SiCoronaengine} from 'react-icons/si'
import {HiEmojiSad} from 'react-icons/hi'
import CountUp from 'react-countup'

const Container = styled.div `
    width: 230px;
    padding: 15px;
    margin: 0 10px;
    background-color: #fff;
    box-shadow: 0 0 4px #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
`
const IconContainer = styled.div `
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({emoj_Bg})=> emoj_Bg};
`
const SadIcon = styled(HiEmojiSad) `
    font-size: 36px;
    color: ${({emoj_color})=> emoj_color};
`
const ConfirmedIcon = styled(SiCoronaengine) `
    font-size: 30px;
    color: ${({emoj_color})=> emoj_color};
`
const Info = styled.div `
    font-family: 'Cairo', sans-serif;
    line-height: 1;
`

const SmallCard = ({emoj_Bg, emoj_color, num, label}) => {
  return (
    <Container>
      <IconContainer emoj_Bg={emoj_Bg} emoj_color={emoj_color}>
        {label == "Deaths" && <SadIcon emoj_color={emoj_color} />}
        {label == "Confirmed" && <ConfirmedIcon emoj_color={emoj_color} />}
      </IconContainer>
      <Info>
            <h2 className="num" style={{marginBottom: "5px", color: emoj_color}}>
                <CountUp
                    start={0}
                    end={num}
                    duration={1}
                    separator=","
                />
            </h2>
            <h4 className="label">{label}</h4>
      </Info>

    </Container>
  )
}

export default SmallCard
