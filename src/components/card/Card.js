import React from 'react'
import CountUp from 'react-countup'
import { Container, DivCases, CasesNumber, Date, Label } from './CardStyle'

const Card = ({label, newnum, totalNum, date, borderColor}) => {

  return (
    <Container borderColor={borderColor}>
        <Label>
            {label}
            <Date>{date}</Date>
        </Label>
        <DivCases>
            <span>New</span>
            <CasesNumber>{newnum}</CasesNumber>
        </DivCases>
        <DivCases>
            <span>Total</span>
            <CasesNumber>
                <CountUp
                    start={0}
                    end={totalNum}
                    duration={1.75}
                    separator=","
                />
            </CasesNumber>
        </DivCases>
       
    </Container>
  )
}

export default Card
