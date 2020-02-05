import React, { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContextProvider = (props) => {
  const [data, setData] = useState({
    weather: '',
    iconId: '',
    temperature: '',
    humidity: ''
  })

  return (
    <DataContext.Provider value={{ data }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
