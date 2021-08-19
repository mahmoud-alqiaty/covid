import React, { useEffect, useState } from 'react'
import CustomSelect from '../../customSelect/CustomSelect'
import { MonthlyChart, MonthlyContainer, MonthlySelect } from './MonthlyStyles'
import { Line } from 'react-chartjs-2'
import Annual from '../annaulData/Annual'


const Monthly = ({data, country, dataTotal}) => {
    
  const [year, setYear] = useState()
  const [month, setMonth] = useState('')
  const [displayedMonth, setDisplayedMonth] = useState([])
  const [displayedYear, setDisplayedYear] = useState([])

  const months = [
    {
      name: 'January',
      num: 0
    },
    {
      name: 'February',
      num: 1
    },
    {
      name: 'March',
      num: 2
    },
    {
      name: 'April',
      num: 3
    },
    {
      name: 'May',
      num: 4
    },
    {
      name: 'June',
      num: 5
    },
    {
      name: 'July',
      num: 6
    },
    {
      name: 'August',
      num: 7
    },
    {
      name: 'September',
      num: 8
    },
    {
      name: 'October',
      num: 9
    },
    {
      name: 'November',
      num: 10
    },
    {
      name: 'December',
      num: 11
    }
  ]

  useEffect(() => {
    if(data.months_2021){
      setYear(2021)
      const selectedMonth = months.find((item, index)=> data.months_2021.length - 1 === index)
      setMonth(selectedMonth.name)
    } 
  }, [data])


  
  
  useEffect(() => {
    const showMonth = (year, month)=>{
      const selectedMonth = months.find(item => item.name === month)
      const selectedMonthNum = selectedMonth && selectedMonth.num
  
      let myMonth;
      if(year === 2020){
        myMonth = data.months_2020.find((item, index) => index === selectedMonthNum)
        setDisplayedYear(dataTotal.months_2020_total)
      }else if(year === 2021){
        myMonth = data.months_2021.find((item, index) => index === selectedMonthNum)
        setDisplayedYear(dataTotal.months_2021_total)
      }
  
      setDisplayedMonth(myMonth)
    }
    showMonth(year, month)
  }, [month, year, data, dataTotal])

  const handleSelectMonth = (month_name) => {
    setMonth(month_name)
  }

  const handleSelectYear = (selectedYear) => {
    setYear(selectedYear)
  }

  return (
    <MonthlyContainer>
      <MonthlySelect>
        <CustomSelect 
          data={[2020, 2021]}
          label="year"
          header={year}
          handleSelect={handleSelectYear}
          responsive 
        />

        <CustomSelect 
          data={months.map(month=> month.name)}
          label="Month"
          header={month}
          handleSelect={handleSelectMonth}
          responsive
        />
      </MonthlySelect>
    
      <MonthlyChart>
      <h3>daily <span className="confirmed">confirmed</span> and <span className="deathes">deathes</span> cases for ({month} - {year})</h3>
        <Line
          data={{
            labels: displayedMonth && displayedMonth.map(day => day.date),
            datasets: [
              {
                label:"Confermed", 
                data: displayedMonth && displayedMonth.map(day=> day.confirmed),
                borderColor: "green",
              },
              {
                label:"Deaths", 
                data: displayedMonth && displayedMonth.map(day=> day.deaths),
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
      </MonthlyChart>
    
      <Annual 
        // country={header}
        data={displayedYear}
        months={months}
        year={year}
      />
    </MonthlyContainer>
  )
}

export default Monthly
