import React, { useEffect, useState } from 'react'
import Countries from '../../components/CountriesSection/Countries'
import { fetchsummary } from '../../components/functions/FetchData'
import GlobalData from '../../components/GlobalSection/GlobalData'

import {Container} from './HomeStyles'


const Home = () => {
  
  const [globalData, setGlobalData] = useState({})
  const [allCountriesLast, setAllCountriesLast] = useState([])


  useEffect(() => {
    const fetchSummaryData = async ()=>{
      const {Global, Countries} = await fetchsummary()
      setGlobalData(Global)
      setAllCountriesLast(Countries)

    }
    fetchSummaryData() 


  }, [])

  return (
    <Container>
      <GlobalData
        GlobalConfirmed={globalData.TotalConfirmed} 
        GlobalDeaths={globalData.TotalDeaths}
      />

      <hr style={{margin: "20px auto"}}/>

      <Countries
        allCountriesLast={allCountriesLast}
      />

    </Container>
  )
}

export default Home
