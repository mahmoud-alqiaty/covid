import React, { useEffect, useState } from 'react'
import CustomSelect from '../customSelect/CustomSelect'
import { fetchSingleCountry } from '../functions/FetchData'

import {Container} from './CountriesStyles'
import LastData from './LastData/LastData'

const Countries = ({allCountriesLast}) => {

  const [coutriesNames, setCoutriesNames] = useState([])
  const [header, setHeader] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [countryLastTotal, setCountryLastTotal] = useState({})
  const [countryLastDay, setCountryLastDay] = useState({})


  useEffect(() => {
    if(allCountriesLast.length){
      setCoutriesNames(allCountriesLast.map(item=> item.Country))
      setHeader(allCountriesLast[0].Country)
    }
  }, [allCountriesLast])


  useEffect(() => {
    if(allCountriesLast.length){
      
      const fetchSingleCountryData = async ()=>{
        const {lastTotal, lastDay} = await fetchSingleCountry(header)
        console.log("lastTotal", lastTotal); 
        setCountryLastTotal(lastTotal)
        setCountryLastDay(lastDay)
      }
  
      fetchSingleCountryData()
    }
  }, [header])


  return (
    <Container>
      <CustomSelect 
        data={coutriesNames}
        label="Country"
        header={header} 
        setHeader={setHeader} 
      />

      <LastData 
        countryLastTotal={countryLastTotal}
        countryLastDay={countryLastDay}
      />
    </Container>
  )
}

export default Countries
