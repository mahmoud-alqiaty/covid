import React from 'react'
import SmallCard from '../card/SmallCard'
import { Globalcontainer } from './GlobalDataStyles'

const GlobalData = ({GlobalConfirmed, GlobalDeaths}) => {
  return (
    <Globalcontainer>
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
    </Globalcontainer>
  )
}

export default GlobalData
