import React, { createContext, useState } from 'react'

export const homeContext = createContext()

const HomeContextProvider = ({children}) => {
    const [selectedCountry, setSelectedCountry] = useState()

  return (
    <homeContext.Provider 
        value={{selectedCountry, setSelectedCountry}}
    >
      {children}
    </homeContext.Provider>
  )
}

export default HomeContextProvider
