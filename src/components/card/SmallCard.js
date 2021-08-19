import React from 'react'
import CountUp from 'react-countup'
import {Container, IconContainer, SadIcon, ConfirmedIcon, Info} from './SmallCardstyles'


const SmallCard = ({emoj_Bg, emoj_color, num, label}) => {
  return (
    <Container>
      <IconContainer emoj_Bg={emoj_Bg} emoj_color={emoj_color}>
        {label === "Deaths" && <SadIcon emoj_color={emoj_color} />}
        {label === "Confirmed" && <ConfirmedIcon emoj_color={emoj_color} />}
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
