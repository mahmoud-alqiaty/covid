import React from 'react'
import styled from 'styled-components'
import { Bar } from 'react-chartjs-2'

const AnnaulContainer = styled.div `
    width: 100%;
    height: 400px;

    h3{
        text-transform: capitalize;
        font-family: 'Cairo', sans-serif;
    }

    @media screen and (max-width: 500px){
        h3{
            font-size: 14px;
        }
    }
`
const Annual = ({data, months, year}) => {
  return (
    <AnnaulContainer>
        <h3>total confirmed and deathes cases for every month in {year}</h3>
        <Bar
            data={{
            labels: months.map(month => month.name),
            datasets: [
                {
                label:"Confermed", 
                data: data && data.map(month => month.confirmed),
                borderColor: "green",
                borderWidth: 1
                },
                {
                label:"Deaths", 
                data: data && data.map(month => month.deaths),
                backgroundColor: "rgb(209 209 237)",
                borderColor: "#30222a",
                borderWidth: 1,
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
    </AnnaulContainer>
  )
}

export default Annual
