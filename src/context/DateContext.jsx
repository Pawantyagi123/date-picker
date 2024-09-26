import React from 'react'
import { createContext, useContext, useState } from 'react'

const DateContext = createContext();
export const useDateContext = () => useContext(DateContext);

export default function DateProvider({children}) {
    const [recurrence, setRecurrence] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customization, setCustomization] = useState({});
  return (
    <div>
       <DateContext.Provider
      value={{
        recurrence,
        setRecurrence,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        customization,
        setCustomization,
      }}
    >
      {children}
    </DateContext.Provider>
    </div>
  )
}
