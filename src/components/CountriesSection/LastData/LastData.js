import React from 'react'
import Card from '../../card/Card'
import { LastDataContainer, CardsContainer } from './LastDataStyles'

const LastData = ({countryLastTotal, countryLastDay}) => {

  // console.log("selectedCountry", selectedCountry);
  return (
    <LastDataContainer>
      <CardsContainer>
          <Card
            label="confirmed"
            newnum={countryLastDay.confirmed}
            totalNum={countryLastTotal.confirmed}
            date={countryLastDay.date}
            borderColor="blue"
          />
          <Card
            label="recovered"
            newnum={countryLastDay.recovered}
            totalNum={countryLastTotal.recovered}
            date={countryLastDay.date}
            borderColor="yellow"
          />
          <Card
            label="death"
            newnum={countryLastDay.deaths}
            totalNum={countryLastTotal.deaths}
            date={countryLastDay.date}
            borderColor="red"
          />
          
        </CardsContainer>
    </LastDataContainer>
  )
}

export default LastData
