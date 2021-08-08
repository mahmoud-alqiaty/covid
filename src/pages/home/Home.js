import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import SmallCard from '../../components/card/SmallCard'
import { homeContext } from '../../components/contextsApi/HomeContext'
import CustomSelect from '../../components/customSelect/CustomSelect'
import { fetcchCountries } from '../../components/functions/FetchCoutries'
import { fetchSummary } from '../../components/functions/FetchSummary'

const Container = styled.div `
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  `
const WorldSection = styled.div `
  width: 100%;
  margin: 0px auto 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
  const Hero = styled.div `
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 15px;
  `
const CardsContainer = styled.div `
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
const Last = styled.div `
  
`

const Home = () => {

  const [input, setInput] = useState("")

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [countries, setCountries] = useState([])
  const [summary, setSummary] = useState()
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

  useEffect(() => {
    const func = async()=>{
      // let c = await fetcchCountries()
      // setCountries(c)
      let s = await fetchSummary()
      setSummary(s)
    }

    func()
  }, [])

  useEffect(() => {
    if(summary){
      setGlobalConfirmed(summary.Global.TotalConfirmed)
      setGlobalDeaths(summary.Global.TotalDeaths)
    }
  }, [summary])

  useEffect(() => {
    if(selectedCountry){
      setNewConfirmed(selectedCountry.NewConfirmed)
      setNewDeaths(selectedCountry.NewDeaths)
      setNewRecovered(selectedCountry.NewRecovered)
      setTotalConfirmed(selectedCountry.TotalConfirmed)
      setTotalDeaths(selectedCountry.TotalDeaths)
      setTotalRecovered(selectedCountry.TotalRecovered)
      let stringDate = new Date("2021-08-08T14:53:10.091Z").toDateString()
      console.log("stringDate: ", stringDate);
      setDate(stringDate)
    }
  }, [selectedCountry])

  
  return (
    <Container>
      <WorldSection>
        <SmallCard
          emoj_Bg="rgb(153 174 153 / 40%)" 
          emoj_color="green"
          num={GlobalConfirmed} 
          label="Confirmed"
        />
        <SmallCard
          emoj_Bg="rgb(209 209 237)" 
          emoj_color="#30222a" 
          num={GlobalDeaths}
          label="Deaths"
        />
        
      </WorldSection>
      
      <CustomSelect 
        data={summary} 
        input={input} 
        setInput={setInput}
      />

      <Hero>
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
      </Hero>
    </Container>
  )
}

export default Home
