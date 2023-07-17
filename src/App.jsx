import { React, useState, createContext } from 'react'
import MemosSection from './MemosSection.jsx'

export const IsLoggedIn = createContext()

function App () {
  const [isloggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <IsLoggedIn.Provider value={[isloggedIn, setIsLoggedIn]}>
        <MemosSection />
      </IsLoggedIn.Provider>
    </div>
  )
}

export default App
