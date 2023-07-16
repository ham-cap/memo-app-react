import { React, useContext, createContext } from 'react'
import MemosSection from './MemosSection.jsx'

export const IsLoggedIn = createContext(false)

function App () {
  const isLoggedIn = useContext(IsLoggedIn)
  return (
    <div>
      <IsLoggedIn.Provider value={isLoggedIn}>
        <MemosSection />
      </IsLoggedIn.Provider>
    </div>
  )
}

export default App
