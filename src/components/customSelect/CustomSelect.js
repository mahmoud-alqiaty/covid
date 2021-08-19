import React, { useEffect, useState } from 'react'

//import styles
import {
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

const CustomSelect = ({label, data, handleSelect, header, responsive}) => {

    const [openList, setOpenList] = useState(false)
    const [input, setInput] = useState("")
    const [displyedData, setDisplyedData] = useState([])

    useEffect(() => {
        if(data.length){
            setDisplyedData(data)
        }
    }, [data])


    const handleChange = (e)=>{
        setInput(e.target.value)
        let arr = data.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()))
        setDisplyedData(arr)
    }

  return (
    <Container responsive={responsive}>
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
                    placeholder="search..."
                    value={input}
                    onChange={handleChange}
                />
                <DropList_Items>
                    {
                        displyedData.length && displyedData.map((item, index)=>
                            <DropList_Item 
                                key={index} 
                                onClick={()=> {
                                    handleSelect(item); 
                                    setOpenList(false); 
                                    setInput("");
                                    setDisplyedData(data)
                                }}
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
