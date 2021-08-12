import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import Card from '../../components/card/Card'
import SmallCard from '../../components/card/SmallCard'
import { homeContext } from '../../components/contextsApi/HomeContext'
import Countries from '../../components/CountriesSection/Countries'
import CustomSelect from '../../components/customSelect/CustomSelect'
import { fetcchCountries } from '../../components/functions/FetchCoutries'
import { fetchsummary } from '../../components/functions/FetchData'
import GlobalData from '../../components/GlobalSection/GlobalData'

import {Container, WorldSection, Hero, CardsContainer, Last} from './HomeStyles'


const Home = () => {
  
  const [globalData, setGlobalData] = useState({})
  const [allCountriesLast, setAllCountriesLast] = useState([])

  const [input, setInput] = useState("")

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [countries, setCountries] = useState([])
  const [GlobalConfirmed, setGlobalConfirmed] = useState()
  const [GlobalDeaths, setGlobalDeaths] = useState()
  
  const {selectedCountry, setSelectedCountry} = useContext(homeContext)

  const [newConfirmed, setNewConfirmed] = useState()
  const [newDeaths, setNewDeaths] = useState()
  const [newRecovered, setNewRecovered] = useState()
  const [totalConfirmed, setTotalConfirmed] = useState()
  const [totalDeaths, setTotalDeaths] = useState()
  const [totalRecovered, setTotalRecovered] = useState()
  const [date, setDate] = useState()
  
  // useEffect(() => {
    //   const func = async()=>{
  //     // let c = await fetcchCountries()
  //     // setCountries(c)
  //     let s = await fetchSummary()
  //     setSummary(s)
  //   }

  //   func()
  // }, [])

  // useEffect(() => {
  //   if(summary){
  //     setGlobalConfirmed(summary.Global.TotalConfirmed)
  //     setGlobalDeaths(summary.Global.TotalDeaths)
  //   }
  // }, [summary])

  // useEffect(() => {
  //   if(selectedCountry){
  //     setNewConfirmed(selectedCountry.NewConfirmed)
  //     setNewDeaths(selectedCountry.NewDeaths)
  //     setNewRecovered(selectedCountry.NewRecovered)
  //     setTotalConfirmed(selectedCountry.TotalConfirmed)
  //     setTotalDeaths(selectedCountry.TotalDeaths)
  //     setTotalRecovered(selectedCountry.TotalRecovered)
  //     let stringDate = new Date("2021-08-08T14:53:10.091Z").toDateString()
  //     console.log("stringDate: ", stringDate);
  //     setDate(stringDate)
  //   }
  // }, [selectedCountry])

  useEffect(() => {
    const fetchSummaryData = async ()=>{
      const {Global, Countries} = await fetchsummary()
      setGlobalData(Global)
      setAllCountriesLast(Countries)

    }
    fetchSummaryData() 


  }, [])

  console.log("GlobalData", globalData);
  console.log("AllCountriesLast", allCountriesLast);

  
  return (
    <Container>
      <GlobalData
        GlobalConfirmed={globalData.TotalConfirmed} 
        GlobalDeaths={globalData.TotalDeaths}
      />

      <Countries
        allCountriesLast={allCountriesLast}
      />

      
      {/* <CustomSelect 
        data={summary} 
        input={input} 
        setInput={setInput}
      />
 */}

      {/* <Hero>
        <CardsContainer>
          <Card
            label="confirmed"
            newnum={newConfirmed}
            totalNum={totalConfirmed}
            date={date}
            borderColor="blue"
          />
          <Card
            label="recovered"
            newnum={newRecovered}
            totalNum={totalRecovered}
            date={date}
            borderColor="yellow"
          />
          <Card
            label="death"
            newnum={newDeaths}
            totalNum={totalDeaths}
            date={date}
            borderColor="red"
          />
        </CardsContainer>
        <Last>last</Last>
      </Hero>  */}
    </Container>
  )
}

export default Home
