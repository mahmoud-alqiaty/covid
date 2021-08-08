import React, { useEffect, useState, useContext } from 'react'
import { homeContext } from '../contextsApi/HomeContext'

//import styles
import {
    Container, 
    Header, 
    HeaderText, 
    HeaderIcon, 
    DropList, 
    SearchBox, 
    DropList_Item, 
    DropList_Items
} from "./CustomSelectStyle"

const CustomSelect = ({data}) => {

    const {selectedCountry, setSelectedCountry} = useContext(homeContext)

    const [openList, setOpenList] = useState(false)
    const [input, setInput] = useState("")
    const [header, setHeader] = useState("select country")

    const [displyedData, setDisplyedData] = useState([])

    useEffect(() => {
        data && data!==[] && setDisplyedData(data.Countries)
    }, [data])

    const handleChange = (e)=>{
        setInput(e.target.value)
        let arr = data.Countries.filter(item=> item.Country.toLowerCase().includes(e.target.value))
        setDisplyedData(arr)
    }

    const handleSelect = (item)=>{
        console.log("selected item", item);
        setHeader(item.Country)
        setSelectedCountry(item)
        setOpenList(false)
    }

  return (
    <Container>
      <Header onClick={()=> setOpenList(!openList)}>
          <HeaderText>
            {header}
          </HeaderText>
          <HeaderIcon />
      </Header>
      <DropList openList={openList}>
            <SearchBox 
                type="text" 
                placeholder="search a country"
                value={input}
                onChange={handleChange}
            />
            <DropList_Items>
                {
                    displyedData && displyedData.map(item=>
                        <DropList_Item onClick={()=> handleSelect(item)}>
                            {item.Country}
                        </DropList_Item>
                    )
                }
                
            </DropList_Items>
      </DropList>
    </Container>
  )
}

export default CustomSelect
