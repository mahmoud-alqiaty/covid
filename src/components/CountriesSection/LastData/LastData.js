import React from 'react'
import Card from '../../card/Card'
import { LastDataContainer, CardsContainer, LastChartContainer } from './LastDataStyles'
import { Line } from 'react-chartjs-2'

const LastData = ({countryLastTotal, countryLastDay, countryLastTenDays}) => {

  console.log("countryLastTenDays", countryLastTenDays);

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
        <LastChartContainer>
        <h3>the last 10 dayes</h3>
          <Line 
            data={{
              labels: countryLastTenDays.map(day=> day.date),
              datasets: [
                {
                  label:"Confermed", 
                  data: countryLastTenDays.map(day=> day.confirmed),
                  borderColor: "green",
                },
                {
                  label:"Deaths", 
                  data: countryLastTenDays.map(day=> day.deaths),
                  backgroundColor: "rgb(209 209 237)",
                  borderColor: "#30222a",
                  fill: true
                }
              ]
            }}
            width={500}
            height={400}
            options={{
              maintainAspectRatio: false
            }}
          />
        </LastChartContainer>
    </LastDataContainer>
  )
}

export default LastData
