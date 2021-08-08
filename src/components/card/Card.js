import React, { useContext, useState } from 'react'
import CountUp from 'react-countup'
import { homeContext } from '../contextsApi/HomeContext'
import { Container, DivCases, CasesNumber, Date, Label } from './CardStyle'

const Card = ({label, newnum, totalNum, date, borderColor}) => {

  return (
    <Container borderColor={borderColor}>
        <Label>{label}</Label>
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
        <Date>{date}</Date>
    </Container>
  )
}

export default Card
