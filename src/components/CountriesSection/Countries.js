import React, { useEffect, useState } from 'react'
import CustomSelect from '../customSelect/CustomSelect'
import { fetchSingleCountry, fetchSingleMonth } from '../functions/FetchData'

import {BorderDiv, Container, MonthlySelect} from './CountriesStyles'
import LastData from './LastData/LastData'
import Monthly from './monthlyData/Monthly'

const Countries = ({allCountriesLast}) => {

  const [coutriesNames, setCoutriesNames] = useState([])
  const [header, setHeader] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [countryLastTotal, setCountryLastTotal] = useState({})
  const [countryLastDay, setCountryLastDay] = useState({})
  const [countryLastTenDays, setCountryLastTenDays] = useState([])
  const [monthlyYear, setMonthlyYear] = useState({})
  const [TotalMonthlyYear, setTotalMonthlyYear] = useState()

  useEffect(() => {
    if(allCountriesLast.length){
      setCoutriesNames(allCountriesLast.map(item=> item.Country))
      setHeader(allCountriesLast[0].Country)
    }
  }, [allCountriesLast])


  useEffect(() => {
    if(allCountriesLast.length){
      
      const fetchSingleCountryData = async ()=>{
        const {
          lastTotal, 
          lastDay, 
          lastTenDays, 
          months_2020, 
          months_2021,  
          months_2020_total,
          months_2021_total,
        } = await fetchSingleCountry(header)

        setCountryLastTotal(lastTotal)
        setCountryLastDay(lastDay)
        setCountryLastTenDays(lastTenDays)
        setMonthlyYear({months_2020, months_2021})
        setTotalMonthlyYear({months_2020_total, months_2021_total,})
      }
  
      fetchSingleCountryData()
    }
  }, [header])

  const handleSelectCountry = (country_name) => {
    setHeader(country_name)
  }

  
  return (
    <Container>
      <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
        <CustomSelect 
          data={coutriesNames}
          label="Country"
          header={header} 
          handleSelect={handleSelectCountry}
        />
      </div>

      <LastData 
        countryLastTotal={countryLastTotal}
        countryLastDay={countryLastDay}
        countryLastTenDays={countryLastTenDays}
      />

      <BorderDiv />
      
      <Monthly 
        country={header}
        data={monthlyYear}
        dataTotal={TotalMonthlyYear}
      />

    </Container>
  )
}

export default Countries
