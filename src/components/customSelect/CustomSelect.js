import React, { useEffect, useState, useContext } from 'react'
import { homeContext } from '../contextsApi/HomeContext'

//import styles
import {
    Label,
    Container, 
    Header, 
    HeaderText, 
    HeaderIcon, 
    DropList, 
    SearchBox, 
    DropList_Item, 
    DropList_Items,
    DataContainer,
    
} from "./CustomSelectStyle"

const CustomSelect = ({label, data, header, setHeader}) => {

    const [openList, setOpenList] = useState(false)
    const [input, setInput] = useState("")
    const [displyedData, setDisplyedData] = useState([])
    // const [header, setHeader] = useState("")
    // const [selectedCountry, setSelectedCountry] = useState("")

    useEffect(() => {
        if(data.length){
            setDisplyedData(data)
            // setHeader(data[0])
        }
    }, [data])


    const handleChange = (e)=>{
        setInput(e.target.value)
        let arr = data.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()))
        setDisplyedData(arr)
    }

    const handleSelect = (item)=>{
        console.log("selected item", item);
        setHeader(item)
        // setSelectedCountry(item)
        setOpenList(false)
    }

  return (
    <Container>
        <Label>Select {label}: </Label>
        <DataContainer>
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
                        displyedData.length && displyedData.map((item, index)=>
                            <DropList_Item 
                                key={index} 
                                onClick={()=> handleSelect(item)}
                            >
                                {item}
                            </DropList_Item>
                        )
                    }
                    
                </DropList_Items>
            </DropList>
        </DataContainer>
    </Container>
  )
}

export default CustomSelect
